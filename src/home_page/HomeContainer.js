import React from "react";
import WideContainer from "./WideContainer";
import GroupCard from "./GroupCard";

const groups = [
  {
    id: 1,
    title: "csokihiány",
    image: "images/group_images/csokihiány.jpg",
  },
  { id: 2, title: "chade", image: "images/group_images/default.jpg" },
  {
    id: 3,
    title: "mennyei",
    image: "images/group_images/new_default_group.jpeg",
  },
  {
    id: 4,
    title: "csokihiány",
    image: "images/group_images/csokihiány.jpg",
  },
  { id: 5, title: "chade", image: "images/group_images/default.jpg" },
  {
    id: 6,
    title: "mennyei",
    image: "images/group_images/new_default_group.jpeg",
  },
  {
    id: 7,
    title: "csokihiány",
    image: "images/group_images/csokihiány.jpg",
  },
  { id: 8, title: "chade", image: "images/group_images/default.jpg" },
  {
    id: 9,
    title: "mennyei",
    image: "images/group_images/new_default_group.jpeg",
  },
  {
    id: 10,
    title: "csokihiány",
    image: "images/group_images/csokihiány.jpg",
  },
  { id: 11, title: "chade", image: "images/group_images/default.jpg" },
  {
    id: 12,
    title: "mennyei",
    image: "images/group_images/new_default_group.jpeg",
  },
  {
    id: 13,
    title: "mennyei",
    image: "images/group_images/new_default_group.jpeg",
  },
];

function HomeContainer() {
  return (
    <WideContainer>
      {groups.map((group) => {
        return (
          <GroupCard key={group.id} title={group.title} image={group.image} />
        );
      })}
    </WideContainer>
  );
}

export default HomeContainer;
