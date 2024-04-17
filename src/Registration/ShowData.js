import React, { useState } from "react";
import { Box, Button } from "@mui/material";


const ShowData = () => {
  const [user, setuser] = useState(false);
  const fetchData = async () => {
    try {
      let a = await fetch("https://eice-backend-2.onrender.com/getData");
      a = await a.json();
      console.log(a);
      setuser(a.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <Box>
      <div style={{textAlign : "center"  , margin : "20px 0px"}}>
        {/* <button style={{fontSize : "20px"}} onClick={fetchData}>Fetch Data</button> */}
        <Button variant="contained" style={{fontSize : "20px" , fontWeight : "bold"}} onClick={fetchData} > Click</Button>
      </div>

      <div>
        {user &&
          user.map((item) => (
            <>
            <div style={{ border : "2px solid green" , width : "50%" , padding : "20px" , margin : "10px auto"}}>

            <div style = {{marginTop : "10px"}}>firstName : {item.firstName} </div>
            <div style = {{marginTop : "10px"}} >lastname : {item.lastName}</div>
            <div  style = {{marginTop : "10px"}} >email : {item.email} </div>
            <div style = {{marginTop : "10px"}} >message : {item.message} </div>

            </div>
            
            </>
          ))}
      </div>
    </Box>
  );
};

export default ShowData;

// const ShowData = () => {
//   return (
//     <>

//       <Box
//         sx={{
//           background:
//             "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
//           display: "flex",
//           minHeight: "100vh",
//           justifyContent: "center",
//           alignItems: "center",
//         }}>
//         <div className="dashboard">
//           <h1>Dashboard</h1>
//           <div className="user-info">
//             <div className="info-item">
//               <div className="info-key">Name:</div>
//               <div className="info-value">{getapi.name}</div>
//             </div>
//             <div className="info-item">
//               <div className="info-key">Last Name:</div>
//               <div className="info-value">{getapi.lastName}</div>
//             </div>
//             <div className="info-item">
//               <div className="info-key">Email:</div>
//               <div className="info-value">{getapi.email}</div>
//             </div>
//           </div>
//         </div>

//       </Box>
//     </>
//   )
// }

// export default ShowData
