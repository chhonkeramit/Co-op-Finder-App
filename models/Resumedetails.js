import {fireDB } from '../firebase'

const Resumedetailsref = fireDB.collection('Resume-Details');

class Resumedetails {
    constructor ({
       firstname,lastname,mailid,education,workexperience,certificates,phonenumber
    }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mailid = mailid;
        this.phonenumber = phonenumber;
        this.education = education;
        this.workexperience = workexperience;
        this.certificates = certificates;
        
    }

    async addResumeDetails () {
        console.log("entered Resume details");
        await Resumedetailsref.add({
            firstname: `${this.firstname}` ,
            lastname : `${this.lastname}`,
            mailid : `${this.mailid}`,
            phonenumber : `${this.phonenumber}`,
            education: `${this.education}`,
            workexperience: `${this.workexperience}`,
           certificates:`${this.certificates}`
        });
    }

}
export { Resumedetails, Resumedetailsref }
