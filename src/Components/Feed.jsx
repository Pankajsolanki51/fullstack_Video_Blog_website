
import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

import { firebaseApp } from "../firebase-config";
import { categoryFeeds, getAllFeeds } from "../utils/fetchData";
import Spinner from "./Spinner";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Video from './Video';
const Feed = () => {
  const firestoreDb = getFirestore(firebaseApp);

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      categoryFeeds(firestoreDb, categoryId).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    } else {
      getAllFeeds(firestoreDb).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner msg={"Loading your feeds"} />;
  if (!feeds?.length > 0) return <NotFound />;


  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="15px"
      width="full"
      autoColumns={"max-content"}
      px="2"
      overflowX={"hidden"}
    >
      {feeds &&
        feeds.map((data) => (
          <Video key={data.id} maxWidth={420} height="80px" data={data} />
        ))}
    </SimpleGrid>
  );

}

export default Feed