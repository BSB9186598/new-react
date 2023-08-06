var name="nitin chauhan" 
var a=[10,20,30, 40, 50]
var emp = {
    id: 1009,
    name:"deepak singh",
    dsg: "trainer",
    salary:"7000"
}

const ExportImport = () => {
    return(
        <>
        <h1>Functional component import export</h1>
        <h2>this is  export import example</h2>
        </>
    )
}
 export default ExportImport; 
 export {name, a, emp}