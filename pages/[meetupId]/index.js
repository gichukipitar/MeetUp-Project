import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
    return (
        <MeetupDetail
        image='https://www.micato.com/wp-content/uploads/2018/09/Nairobi_Skyline.jpg'
        title='Nairobi'
        address='Some address 15, 12345 Some City'
        description='This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'
        />
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } },
            { params: { meetupId: 'm3' } },
        ],
        fallback: false,
    };
}

export async function getStaticProps(context) {
    // fetch data from an API
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: 'https://www.micato.com/wp-content/uploads/2018/09/Nairobi_Skyline.jpg',
                id: 'meetupId',
                title: 'This is a third meetup',
                address: 'Some address 15, 12345 Some City',
                description: 'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'
            },
        },
        revalidate: 1,
    };
}

export default MeetupDetails;