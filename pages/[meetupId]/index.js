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

export default MeetupDetails;