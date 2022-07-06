import {fireDB } from '../firebase'

const Resumedetailsref = fireDB.collection('Resume-Details');

class Resumedetails {
    constructor ({
        Company_Name,Job_Title,Job_Type,Location,Job_Description,pay
    }) {
        this.Company_Name = Company_Name;
        this.Job_Description = Job_Description;
        this.Job_Title = Job_Title;
        this.Job_Type = Job_Type;
        this.Location = Location;
        this.pay = pay;
    }

    async addResumeDetails () {
        console.log("entered Resume details");
        await Resumedetailsref.add({
            Company_Name: `${this.Company_Name}` ,
            Job_Description : `${this.Job_Description}`,
            Job_Title : `${this.Job_Title}`,
            Job_Type : `${this.Job_Type}`,
            Location: `${this.Location}`,
            pay: `${this.pay}`
        });
    }

}
export { Resumedetails, Resumedetailsref }
