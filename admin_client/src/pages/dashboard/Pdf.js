import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import Logo from "../../assets/Images/Logo_IIITL.png";
import Person from "../../assets/Images/logoV3.png";
import p400 from '../../assets/fonts/PoppinsRegular400.ttf';
import p500 from '../../assets/fonts/PoppinsMedium500.ttf';
import p600 from '../../assets/fonts/PoppinsSemiBold600.ttf';

// Register font
Font.register({
  family: "Poppins",
  fonts: [
    {
      src: p400,
      fontStyle: "normal",
      fontWeight: 400
    },
    {
      src: p500,
      fontStyle: "normal",
      fontWeight: 500
    },
    {
      src: p600,
      fontStyle: "normal",
      fontWeight: 600
    },
  ],
});
// Font.register({
//   family: "Hindi",
//   src: "http://fonts.gstatic.com/s/notoserifdevanagari/v28/x3dYcl3IZKmUqiMk48ZHXJ5jwU-DZGRSaQ4Hh2dGyFzPLcQPVbnRNeFsw0xRWb6uxTA-oz-GO0M.ttf/",
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    // width: "100vw",
    // height: "100vh",
    backgroundColor: "#fff",
    fontFamily: "Poppins",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1
  },
  section2: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    // flexGrow: 1
  },
  table: {
    marginHorizontal: 15,
    marginVertical: 5,
    // padding: 10,
    border: "1px solid #000",
    fontSize: 12,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #000",
  },
  header: {
    borderTop: "none",
  },
  bold: {
    fontWeight: "bold",
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "16.88%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row2: {
    width: "11.22%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row3: {
    width: "16.88%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row4: {
    width: "8.11%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row5: {
    width: "7.66%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row6: {
    width: "9.11%",
    borderRight: "1px solid #000",
    padding: 8,
  },
  row7: {
    width: "13.22%",
    padding: 8,
  },
});

// Create Document Component
const Pdf = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          ...styles.section,
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
        }}
        fixed
      >
        <Image src={Logo} alt="iiitlogo" style={{ width: "98px" }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            paddingVertical: "25px",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Indian Institute of Information Technology, Lucknow
          </Text>
          {/* <Text style={{ textAlign: "center", fontFamily: "Hindi"}} >भारतीय सूचना प्रौद्योगिकी संस्थान, लखनऊ </Text> */}
          <Text
            style={{ textAlign: "center", fontSize: "14px", color: "grey" }}
          >
            (An Institute of National Importance by the Act of Parliament)
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          fontWeight: 600,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        <Text>B.Tech.(IT), (CS), (CSAI) & (CSB) Registration Cum Enrollment Form 2023</Text>
      </View>
      <View style={{ position: "absolute", top: 175, right: 15 }}>
        <Image
          src={`${data?.personalDetails.picture ? data?.personalDetails.picture : Person}`}
          style={{ width: "108px" }}
        />
      </View>
      <View
        style={{
          ...styles.section2,
          paddingBottom: 0,
          fontSize: 13,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <Text>Official Details :-</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          width: "78%",
          fontSize: 12,
        }}
      >
        <Text>Enrollment No.: ...............</Text>
        <Text>{`Program Name: ${data?.officialDetails.programName}`}</Text>
        <Text>{`Batch of Year: ${data?.officialDetails.batchOfYear}`}</Text>
      </View>

      <View
        style={{
          ...styles.section2,
          paddingBottom: 0,
          fontSize: 13,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <Text>Personal Details :-</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          width: "78%",
          fontSize: 12,
        }}
      >
        <Text>{`Student Name: ${data?.personalDetails.studentName.inEnglish}`}</Text>
        <Text>{`Date of Birth: ${data?.personalDetails.dob.slice(
          0,
          10
        )}`}</Text>
        <Text>{`Gender: ${data?.personalDetails.gender}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          width: "78%",
          fontSize: 12,
        }}
      >
        <Text>{`Blood Group: ${data?.personalDetails.bloodGroup}`}</Text>
        <Text>{`PWD: ${data?.personalDetails.pwd}`}</Text>
        <Text>{`Category: ${data?.personalDetails.category}`}</Text>
        <Text>{`Religion: ${data?.personalDetails.religion}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          width: "78%",
          fontSize: 12,
        }}
      >
        <Text>{`Aadhaar No.: ${data?.personalDetails.aadhaarNum}`}</Text>
        <Text>{`Marital Status: ${data?.personalDetails.maritalStatus}`}</Text>
        <Text>{`Nationality: ${data?.personalDetails.nationality}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          width: "78%",
          fontSize: 12,
        }}
      >
        <Text>{`Phone Number: ${data?.personalDetails.phoneNum}`}</Text>
        <Text>{`Email: ${data?.personalDetails.emailId}`}</Text>
        <Text>{`Hobbies: ${data?.personalDetails.hobbies}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          paddingBottom: 0,
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <Text>Gate Exam :-</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Roll No.: ${data?.personalDetails.gateExam.rollNum}`}</Text>
        <Text>{`Score: ${data?.personalDetails.gateExam.score}`}</Text>
        <Text>{`Rank: ${data?.personalDetails.gateExam.rank}`}</Text>
        <Text>{`Year: ${data?.personalDetails.gateExam.year}`}</Text>
        <Text>{`Branch: ${data?.personalDetails.gateExam.branch}`}</Text>
      </View>

      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Communication Address: ${data?.personalDetails.communAddress.address}`}</Text>
        <Text>{`District: ${data?.personalDetails.communAddress.district}`}</Text>
        <Text>{`State: ${data?.personalDetails.communAddress.state}`}</Text>
        <Text>{`Pincode: ${data?.personalDetails.communAddress.pincode}`}</Text>
      </View>

      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Permanent Address: ${data?.personalDetails.permanentAddress.address}`}</Text>
        <Text>{`District: ${data?.personalDetails.permanentAddress.district}`}</Text>
        <Text>{`State: ${data?.personalDetails.permanentAddress.state}`}</Text>
        <Text>{`Pincode: ${data?.personalDetails.permanentAddress.pincode}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          paddingBottom: 0,
          fontSize: 13,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <Text>Parents/Guardian Details :-</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Father's Name: ${data?.parentsDetails.father.name}`}</Text>
        <Text>{`Designation: ${data?.parentsDetails.father.designation}`}</Text>
        <Text>{`Phone No.: ${data?.parentsDetails.father.phoneNum}`}</Text>
        <Text>{`Email: ${data?.parentsDetails.father.emailId}`}</Text>
        <Text>{`Address: ${data?.parentsDetails.father.address}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Mother's Name: ${data?.parentsDetails.mother.name}`}</Text>
        <Text>{`Designation: ${data?.parentsDetails.mother.designation}`}</Text>
        <Text>{`Phone No.: ${data?.parentsDetails.mother.phoneNum}`}</Text>
        <Text>{`Email: ${data?.parentsDetails.mother.emailId}`}</Text>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          columnGap: 25,
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        <Text>{`Guardian's Name: ${data?.parentsDetails.guardian.name}`}</Text>
        <Text>{`Phone No.: ${data?.parentsDetails.guardian.phoneNum}`}</Text>
        <Text>{`Relation: ${data?.parentsDetails.guardian.relation}`}</Text>
        <Text>{`Address: ${data?.parentsDetails.guardian.address}`}</Text>
      </View>

      <View
        style={{
          ...styles.section2,
          paddingBottom: 0,
          fontSize: 13,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <Text>Academic Details :-</Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.row, styles.bold, styles.header]}>
          <Text style={styles.row1}>Degree Name</Text>
          <Text style={styles.row2}>Subjects</Text>
          <Text style={styles.row3}>Board/University Name</Text>
          <Text style={styles.row4}>Year</Text>
          <Text style={styles.row5}>Division</Text>
          <Text style={styles.row6}>Marks</Text>
          <Text style={styles.row6}>Total Marks</Text>
          <Text style={styles.row6}>Grade</Text>
          <Text style={styles.row7}>Certificate No.</Text>
        </View>

        <View style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>High School</Text>
          </Text>
          <Text
            style={styles.row2}
          >{`${data?.academicDetails.degree[0].subjects}`}</Text>
          <Text
            style={styles.row3}
          >{`${data?.academicDetails.degree[0].board}`}</Text>
          <Text style={styles.row4}>
            {`${data?.academicDetails.degree[0].year}`}
          </Text>
          <Text style={styles.row5}>{`${data?.academicDetails.degree[0].division}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[0].marks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[0].totalMarks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[0].grade}`}</Text>
          <Text style={styles.row7}>{`${data?.academicDetails.degree[0].degreeNum}`}</Text>
        </View>
        <View style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>Intermediate</Text>
          </Text>
          <Text
            style={styles.row2}
          >{`${data?.academicDetails.degree[1].subjects}`}</Text>
          <Text
            style={styles.row3}
          >{`${data?.academicDetails.degree[1].board}`}</Text>
          <Text style={styles.row4}>
            {`${data?.academicDetails.degree[1].year}`}
          </Text>
          <Text style={styles.row5}>{`${data?.academicDetails.degree[1].division}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[1].marks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[1].totalMarks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[1].grade}`}</Text>
          <Text style={styles.row7}>{`${data?.academicDetails.degree[1].degreeNum}`}</Text>
        </View>
        <View style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>Graduation</Text>
          </Text>
          <Text
            style={styles.row2}
          >{`${data?.academicDetails.degree[2].subjects}`}</Text>
          <Text
            style={styles.row3}
          >{`${data?.academicDetails.degree[2].board}`}</Text>
          <Text style={styles.row4}>
            {`${data?.academicDetails.degree[2].year}`}
          </Text>
          <Text style={styles.row5}>{`${data?.academicDetails.degree[2].division}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[2].marks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[2].totalMarks}`}</Text>
          <Text style={styles.row6}>{`${data?.academicDetails.degree[2].grade}`}</Text>
          <Text style={styles.row7}>{`${data?.academicDetails.degree[2].degreeNum}`}</Text>
        </View>
      </View>
      <View
        style={{
          ...styles.section2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItemsrun : "center",
          flexWrap: "wrap",
          fontSize: 12,
          paddingVertical: 5
        }}
      >
        <Text>Student Sign.: ...............</Text>
        <Text>Date: .....................</Text>
        <Text>Admission Cell: ....................</Text>
      </View>
    </Page>
  </Document>
);

export default Pdf;
