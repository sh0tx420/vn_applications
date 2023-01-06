import VHeader from "./components/vheader";
import VText from "./components/vtext";
import {
    VStack, HStack, Divider, FormControl, FormHelperText, Input, SimpleSelect, SimpleOption, Radio, RadioGroup, Textarea,
    Select, SelectTrigger, SelectValue, SelectPlaceholder, SelectContent, SelectListbox, SelectOption, SelectOptionText, SelectOptionIndicator, SelectIcon, Button
} from "@hope-ui/solid";
import { For, createSignal } from "solid-js";
import { timezones_gmt } from "./data";


function App() {

    const [form, setForm] = createSignal({
        server: "VoidRP",
        discord: "",
        steamid: "",
        age: "",
        timezone: "",
        readrules: "",
        whyapplying: "",
        description: ""
    });

    // shit hack because fuck solidjs
    const [timezone, setTimezone] = createSignal("");

    return (
        <div class="flex justify-center content-center">
            <div class="mt-8 mb-8 p-2 bg-neutral-800 rounded-lg w-2/5">
                <VHeader>Staff Application</VHeader>
                <Divider />
                <VStack spacing="$4" class="p-4">
                    <FormControl disabled>
                        <VText>Which server are you applying for?</VText>
                        <SimpleSelect placeholder="VoidRP" size="lg">
                            <SimpleOption value="voidrp">VoidRP</SimpleOption>
                        </SimpleSelect>
                    </FormControl>

                    <FormControl>
                        <VText>What is your Discord name and tag?</VText>
                        <Input placeholder="Username#0000" size="lg" value={form()["discord"]} onInput={(e) => setForm(dict => ({...dict, discord: e.currentTarget.value}))}/>
                    </FormControl>

                    <FormControl>
                        <VText>What is your Steam ID?</VText>
                        <Input placeholder="STEAM_0:0:000000000" size="lg" value={form()["steamid"]} onInput={(e) => setForm(dict => ({...dict, steamid: e.currentTarget.value}))}/>
                        <FormHelperText>
                            <VText>
                                You can grab your Steam ID from <a href="https://steamid.io/" class="text-red-600">here</a>.
                            </VText>
                        </FormHelperText>
                    </FormControl>

                    <FormControl>
                        <VText>What is your age?</VText>
                        <RadioGroup variant="filled">
                            <HStack spacing="$4">
                                <Radio size="lg" value="1" onChange={(e) => setForm(dict => ({...dict, age: e.currentTarget.value}))}>Younger than 13</Radio>
                                <Radio size="lg" value="2" onChange={(e) => setForm(dict => ({...dict, age: e.currentTarget.value}))}>13-16</Radio>
                                <Radio size="lg" value="3" onChange={(e) => setForm(dict => ({...dict, age: e.currentTarget.value}))}>16-18</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    {/*
                    <FormControl>
                        <VText>What is your timezone?</VText>
                        <Select value={form()["timezone"]} onChange={(e) => setForm(dict => ({...dict, timezone: e.currentTarget.value}))}>
                            <SelectTrigger>
                                <SelectPlaceholder>GMT 00:00</SelectPlaceholder>
                                <SelectValue />
                                <SelectIcon />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectListbox>
                                    <For each={timezones_gmt}>
                                        {tz => (
                                            <SelectOption value={tz}>
                                                <SelectOptionText>GMT {tz}</SelectOptionText>
                                                <SelectOptionIndicator />
                                            </SelectOption>
                                        )}
                                    </For>
                                </SelectListbox>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    */}

                    <FormControl>
                        <VText>What is your timezone?</VText>
                        <SimpleSelect placeholder="GMT 00:00" value={timezone()} onChange={setTimezone}>
                            <For each={timezones_gmt}>
                                {tz => (
                                    <SimpleOption value={tz}>GMT {tz}</SimpleOption>
                                )}
                            </For>
                        </SimpleSelect>
                    </FormControl>

                    <FormControl>
                        <VText>Have you read and understood all of the rules?</VText>
                        <Input size="lg" placeholder="..." value={form()["readrules"]} onInput={(e) => setForm(dict => ({...dict, readrules: e.currentTarget.value}))}/>
                    </FormControl>

                    <FormControl>
                        <VText>
                            Why are you applying to become a staff on VoidRP?
                        </VText>
                        <Textarea size="lg" placeholder="I am applying to become staff because..." value={form()["whyapplying"]} onInput={(e) => setForm(dict => ({...dict, whyapplying: e.currentTarget.value}))} />
                    </FormControl>

                    <FormControl>
                        <VText>Finally, tell us a little about yourself, what you can do on the server, what you've done in the past etc.:</VText>
                        <Textarea size="lg" placeholder="I have previously..." value={form()["description"]} onInput={(e) => setForm(dict => ({...dict, description: e.currentTarget.value}))} />
                    </FormControl>

                </VStack>

                <Button class="m-4 bg-red-700 hover:bg-red-500">Submit</Button>
            </div>
        </div>
    );
}

export default App;
