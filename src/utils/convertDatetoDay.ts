export default function convertDatetoDay (date : string){
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-GB", { weekday: 'long' });        
}