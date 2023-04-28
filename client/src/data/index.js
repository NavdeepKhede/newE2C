import { faker } from "@faker-js/faker";
import {
  AddressBook,
  ChatCircleDots,
  FilmScript,
  Gear,
  GearSix,
  House,
  SignOut,
  User,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Logout",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <House />,
  },
  {
    index: 1,
    icon: <FilmScript />,
  },
  {
    index: 2,
    icon: <AddressBook />,
  },
  {
    index: 3,
    icon: <ChatCircleDots />
  }
];

const Nav_Setting = [
  {
    index: 4,
    icon: <GearSix />,
  },
];

const TeamMember = [
  {
    id: 0,
    name: "Navdeep Khede",
    image: faker.image.avatar(),
  },
  {
    id: 1,
    name: "Vivek Barnwal",
    image: faker.image.avatar(),
  },
  {
    id: 2,
    name: "Mohit",
    image: faker.image.avatar(),
  },
  {
    id: 3,
    name: "Alok Ranjan",
    image: faker.image.avatar(),
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  TeamMember,
};
