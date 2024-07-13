import * as React from "react";
import { Box, Flex, Text, AspectRatio, Stack, Icon, HStack, Center } from "@chakra-ui/react";
import { GetUserLaptimesResponse } from "../../Types";
import { RiComputerLine, RiMapPinLine, RiTimerFlashLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import miscFunctions from "../../misc/miscFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";

type PostProps = {
    laptimes: GetUserLaptimesResponse[];
    fetchMoreData: () => void;
    hasMore: boolean;
};


// homepage posts( recent) posts of users
export const HomePost: React.FC<PostProps> = ({ laptimes, fetchMoreData, hasMore }) => {

    const [liked, setLiked] = React.useState(false);
    const [showFullText, setShowFullText] = React.useState(false);
    const { LazyLoadYoutubeEmbed } = miscFunctions();
    const textLimit = 100;

    return (
        <Flex mt={10} bg="dark">
            {/* Left section*/}
            <Box flex="1" borderRight="1px solid #323536" overflowY="auto" display={["none", "none", "block"]}>
                {/* left section content */}
            </Box>

            {/* Middle section */}
            <Box flex="3"
                rounded={'sm'}
                my={1}
                mx={[0, 5]}
                overflow={'hidden'}
                borderRadius={"1px"}
                overflowY="auto"
            >
                <InfiniteScroll
                    dataLength={laptimes.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Center><BeatLoader size={8} color='red' /></Center>}
                >
                    {laptimes.map((laptime) => (
                        <Box key={laptime.id.toString()} p={1} borderBottom="1px solid #323536">

                            <Flex justifyContent={"space-between"} p={2}>
                                <Text as="b" fontSize={{ base: 'sm', md: 'lg' }}>{laptime.title}</Text>

                                <Text fontSize="sm" color={"GrayText"}>@{laptime.by}</Text>
                            </Flex>
                            {laptime.youtube_link && (
                                <LazyLoadYoutubeEmbed youtubeLink={laptime.youtube_link} />
                            )}
                            <Box p={4} >
                                <Flex alignItems={"center"} justifyContent={"space-between"} overflowX="auto"
                                >
                                    <Stack direction={"row"} spacing={2} align="flex-start" flexShrink="0">

                                        {laptime.car && (
                                            <Box
                                                bg="black"
                                                display={"inline-block"}
                                                px={2}
                                                py={1}
                                                color="white"
                                                mb={2}
                                            >
                                                <Flex justifyContent={"space-between"}>
                                                    <HStack>
                                                        <Icon color="red" as={FaCar} />
                                                        <Text color={"GrayText"} fontSize={"xs"} fontWeight="medium">
                                                            {laptime.car}
                                                        </Text>
                                                    </HStack>
                                                </Flex>
                                            </Box>
                                        )}
                                        {laptime.track && (

                                            <Flex>
                                                <Box
                                                    bg="black"
                                                    display={"inline-block"}
                                                    px={2}
                                                    py={1}
                                                    color="white"
                                                    mb={2}
                                                >
                                                    <Flex justifyContent={"space-between"}>
                                                        <HStack>
                                                            <Icon color="red" as={RiMapPinLine} />

                                                            <Text color={"GrayText"} fontSize={"xs"} fontWeight="medium">
                                                                {laptime.track}
                                                            </Text>
                                                        </HStack>
                                                    </Flex>
                                                </Box>
                                            </Flex>
                                        )}
                                        {laptime.platform && (

                                            <Box
                                                bg="black"
                                                display={"inline-block"}
                                                px={2}
                                                py={1}
                                                color="white"
                                                mb={2}
                                            >
                                                <Flex justifyContent={"space-between"}>
                                                    <HStack>
                                                        <Icon color="red" as={RiComputerLine} />
                                                        <Text color={"GrayText"} fontSize={"xs"} fontWeight="medium">
                                                            {laptime.platform}
                                                        </Text>
                                                    </HStack>
                                                </Flex>
                                            </Box>
                                        )}
                                        {laptime.time && (

                                            <Box
                                                bg="black"
                                                display={"inline-block"}
                                                px={2}
                                                py={1}
                                                color="white"
                                                mb={2}
                                            >
                                                <Flex justifyContent={"space-between"}>
                                                    <HStack>
                                                        <Icon color="red" as={RiTimerFlashLine} />
                                                        <Text color={"GrayText"} fontSize={"xs"} fontWeight="medium">
                                                            {laptime.time}
                                                        </Text>
                                                    </HStack>
                                                </Flex>
                                            </Box>
                                        )}
                                    </Stack>
                                </Flex>
                                <Text fontSize={"smaller"} color={"white"} mt={3}>
                                    {showFullText ? laptime.comment : laptime.comment.substring(0, textLimit)}
                                    {laptime.comment.length > textLimit && (
                                        <span
                                            style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                                            onClick={() => setShowFullText(!showFullText)}
                                        >
                                            {showFullText ? "Read less" : "... Read more"}
                                        </span>
                                    )}
                                </Text>

                            </Box>

                            {/*like, comments
                        <Flex alignItems={"center"} justifyContent={"right"} p={2}>
                            <Stack direction={"row"} spacing={2}>
                                <Flex >
                                    <HStack justifyContent={"space-between"}>
                                        <Box onClick={() => setLiked(!liked)}>
                                            {liked ? (
                                                <BsHeartFill fill="red" fontSize={"18px"} />
                                            ) : (
                                                <BsHeart fontSize={"18px"} />
                                            )}
                                        </Box>
                                        <Text color={"grey"} fontSize={"15px"}>200</Text>
                                    </HStack>
                                </Flex>

                                <Flex>
                                    <HStack justifyContent={"space-between"}>
                                        <Icon as={GoCommentDiscussion} fontSize={"18px"} />
                                        <Text color={"grey"} fontSize={"15px"}>7</Text>

                                    </HStack>
                                </Flex>
                            </Stack>
                        </Flex>
                        */}
                        </Box>
                    ))}
                </InfiniteScroll>
            </Box>

            {/* Right section*/}
            <Box flex="1" borderLeft="1px solid #323536" overflowY="auto" display={["none", "none", "block"]}>
                {/*right content section */}
            </Box>
        </Flex>
    );
};

