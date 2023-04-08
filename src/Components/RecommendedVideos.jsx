import React, { useEffect, useState } from "react";
import { getAllFeeds } from "../utils/fetchData";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Video } from ".";

const RecommendedVideos = ({ feeds }) => {
  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="15px"
      width="full"
      autoColumns={"max-content"}
      overflowX={"hidden"}
    >
      {feeds &&
        feeds.map((data) => (
          <Video key={data.id} maxWidth={420} height="80px" data={data} />
        ))}
    </SimpleGrid>
  );
};

export default RecommendedVideos;