import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://media.timeout.com/images/105211673/image.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image: 'https://www.micato.com/wp-content/uploads/2018/09/Nairobi_Skyline.jpg',
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