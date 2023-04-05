import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import {MongoClient} from 'mongodb';
import {Fragment} from "react";

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image: 'https://media.timeout.com/images/105211673/image.jpg',
//         address: 'Some address 5, 12345 Some City',
//         description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown.jpg',
//         address: 'Some address 10, 12345 Some City',
//         description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//     },
//     {
//         id: 'm3',
//         title: 'This is a third meetup',
//         image: 'https://www.micato.com/wp-content/uploads/2018/09/Nairobi_Skyline.jpg',
//         address: 'Some address 15, 12345 Some City',
//         description: 'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//     }
// ];
const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//
//     };
// }

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.shd9alf.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),

        },
        revalidate: 1,
    };
}
export default HomePage;