import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
        address: 'Some address 15, 12345 Some City',
        description: 'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    }
];
const HomePage = () => {
    return (
        <div>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </div>
    );
}

export default HomePage