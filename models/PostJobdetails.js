import {fireDB } from '../firebase'

const PostJobdetailsref = fireDB.collection('Job-Postings');

class PostJobdetails {
    constructor ({
        Company_Name,Job_Title,Job_Type,Location,Job_Description
    }) {
        this.Company_Name = Company_Name;
        this.Job_Description = Job_Description;
        this.Job_Title = Job_Title;
        this.Job_Type = Job_Type;
        this.Location = Location;
    }

    async addJobDetails () {
        console.log("entered job details");
        await PostJobdetailsref.add({
            Company_Name: `${this.Company_Name}` ,
            Job_Description : `${this.Job_Description}`,
            Job_Title : `${this.Job_Title}`,
            Job_Type : `${this.Job_Type}`,
            Location: `${this.Location}`
        });
    }

}
export { PostJobdetails, PostJobdetailsref }
