import Enrollment from "../models/Enrollment.js";

export const generateEnrollmentNumber = async (branchName) => {
  const currentYear = new Date().getFullYear();

  try {
    const result = await Enrollment.findOneAndUpdate(
      { branch: branchName, year: currentYear },
      { $inc: { number: 1 } },
      { upsert: true, new: true }
    );
    
    let fromattedNumber;
    if(result.number < 10){
        fromattedNumber = result.number.toString().padStart(3,'0');
    } else if(result.number < 100){
        fromattedNumber = result.number.toString().padStart(2,'0');
    } else {
        fromattedNumber = result.number.toString();
    }

    const enrollmentNumber = `${branchName.toUpperCase()}${currentYear}${fromattedNumber}`;
    return enrollmentNumber;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
