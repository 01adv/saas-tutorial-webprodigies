import { Dock, GridIcon, HeartIcon, Megaphone, SubtitlesIcon, Text, WheatIcon } from "lucide-react"

export type CreateGroupPlaceholderProps = {
    id: string
    label: string
    icon: JSX.Element
}

export const CREATE_GROUP_PLACEHOLDER: CreateGroupPlaceholderProps[] = [
    {
        id: "0",
        label: "Highly engaging",
        icon: <Megaphone />,
    },
    {
        id: "1",
        label: "Easy to setup",
        icon: <HeartIcon />,
    },
    {
        id: "2",
        label: "Group chat and posts",
        icon: <Text />,
    },
    {
        id: "3",
        label: "Students can create teams within Groups",
        icon: <GridIcon />,
    },
    {
        id: "4",
        label: "Gamification",
        icon: <Dock />,
    },
    {
        id: "5",
        label: "Host unlimited courses",
        //   icon: <Courses />,
        icon: <SubtitlesIcon />,

    },
    {
        id: "6",
        label: "White-labeling options",
        //   icon: <WhiteLabel />,
        icon: <WheatIcon />,
    },
]