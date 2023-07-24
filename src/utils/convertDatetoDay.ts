export default function convertDatetoDay (date : string){
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-GB", { weekday: 'long' });        
}