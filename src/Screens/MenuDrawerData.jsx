const menuDrawer = [
    {
        id: 1,
        menuTitle: "Home",
        isActive: true,
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.5L12 2L21 9.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 2,
        menuTitle: "Explore",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 3,
        menuTitle: "Notifications",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 16V11C18 7.13 15.87 4 12 4C8.13 4 6 7.13 6 11V16L4 18V19H20V18L18 16ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 4,
        menuTitle: "Messages",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H22V20H18L12 22L6 20H2V2Z" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 5,
        menuTitle: "Bookmarks",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2H18V22L12 18L6 22V2Z" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 6,
        menuTitle: "Lists",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 7,
        menuTitle: "Profile",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#1DA1F2" strokeWidth="2"/>
                <path d="M4 20C4 16.69 7.69 14 12 14C16.31 14 20 16.69 20 20" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        id: 8,
        menuTitle: "More",
        menuSvg: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" stroke="#1DA1F2" strokeWidth="2"/>
                <circle cx="5" cy="12" r="2" stroke="#1DA1F2" strokeWidth="2"/>
                <circle cx="19" cy="12" r="2" stroke="#1DA1F2" strokeWidth="2"/>
            </svg>
        ),
        
    },
    {
        id: 9,
        imageUrl:"https://media.vanityfair.com/photos/650095a4a5dad6d330c01de2/1:1/w_1238,h_1238,c_limit/elon-musk-amber-heard.jpg"  
    },
];

export default menuDrawer;
