import VHeader from "./components/vheader";
import VText from "./components/vtext";
import {
    VStack, HStack, Divider, FormControl, FormHelperText, Input, SimpleSelect, SimpleOption, Radio, RadioGroup, Textarea,
    Select, SelectTrigger, SelectValue, SelectPlaceholder, SelectContent, SelectListbox, SelectOption, SelectOptionText, SelectOptionIndicator, SelectIcon
} from "@hope-ui/solid";
import { For } from "solid-js";
import { timezones_gmt } from "./data";


function App() {
    return (
        <div class="w-full h-full bg-neutral-900 text-neutral-50">
            <div class="flex justify-center content-center">
                <div class="mt-8 mb-8 p-2 bg-neutral-700 rounded-lg w-2/5">
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
                            <Input placeholder="Username#0000" size="lg" />
                        </FormControl>

                        <FormControl>
                            <VText>What is your Steam ID?</VText>
                            <Input placeholder="STEAM_0:0:000000000" size="lg" />
                            <FormHelperText>
                                <VText>
                                    You can grab your Steam ID from <a href="https://steamid.io/" class="text-red-600">here</a>.
                                </VText>
                            </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <VText>What is your age?</VText>
                            <RadioGroup>
                                <HStack spacing="$4">
                                    <Radio size="lg" value="1">Younger than 13</Radio>
                                    <Radio size="lg" value="2">13-16</Radio>
                                    <Radio size="lg" value="3">16-18</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <VText>Have you read and understood all of the rules?</VText>
                            <Input size="lg" placeholder="..."/>
                        </FormControl>

                        <FormControl>
                            <VText>
                                Why are you applying to become a staff on VoidRP?
                            </VText>
                            <Textarea size="lg" placeholder="I am applying to become staff because...">

                            </Textarea>
                        </FormControl>

                        <FormControl>
                            <VText>What is your timezone?</VText>
                            <Select>
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
                    </VStack>
                </div>
            </div>
        </div>
    );
}

/*
What is your timezone? (options)
How long have you been playing on the server?
Finally, tell us a little about yourself (ideally include your age and the amount of time you are able to spend on the server): 
*/

export default App;
