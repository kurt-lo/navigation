import { LinkTypes } from "@/types";

export const navLinks: { title: string; labels: LinkTypes[] }[] = [
    {
        title: 'Features',
        labels: [
            { icon: './icon-todo.svg', label: 'Todo List' },
            { icon: './icon-calendar.svg', label: 'Calendar' },
            { icon: './icon-reminders.svg', label: 'Reminders' },
            { icon: './icon-planning.svg', label: 'Planning' },
        ],
    },
    {
        title: 'Company',
        labels: [
            { label: 'History' },
            { label: 'Our Team' },
            { label: 'Blog' },
        ]
    },
    {
        title: 'Careers',
        labels: [] // Ensure 'labels' property is present, even if it's an empty array
    },
    {
        title: 'About',
        labels: [] // Ensure 'labels' property is present, even if it's an empty array
    }
]