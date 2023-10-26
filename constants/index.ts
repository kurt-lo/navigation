import { LinkTypes } from "@/types";

export const navLinks: { title: string; labels: LinkTypes[] }[] = [
    {
        title: 'Features',
        labels: [
            { icon: './icon-todo.svg', label: 'Todo List', href:'/' },
            { icon: './icon-calendar.svg', label: 'Calendar', href:'/' },
            { icon: './icon-reminders.svg', label: 'Reminders', href:'/' },
            { icon: './icon-planning.svg', label: 'Planning', href:'/' },
        ],
    },
    {
        title: 'Company',
        labels: [
            { label: 'History', href:'/' },
            { label: 'Our Team', href:'/' },
            { label: 'Blog', href:'/' },
        ],
    },
    {
        title: 'Careers',
        labels: [], // Ensure 'labels' property is present, even if it's an empty array
    },
    {
        title: 'About',
        labels: [],
    }
]