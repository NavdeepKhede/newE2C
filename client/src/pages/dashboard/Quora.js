import React from "react";
import { faker } from "@faker-js/faker";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import RHFTextAreaField from "../../components/hook-form/RHFTextAreaForm";
import QuoraForm from "../../sections/QuoraForm";
import QuestionMark from "../../assets/Illustration/Question.png";
import FeedSpace from "../../sections/quora/FeedSpace";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CaretDown } from "phosphor-react";

const FAQData = [
  {
    id: 1,
    question: "What is Ease 2 Council?",
    answer:
      "Ease 2 Council is a user-friendly college registration website designed to automate enrollment processes and enhance the overall user experience.",
  },
  {
    id: 2,
    question: "How do I register on Ease 2 Council?",
    answer:
      "To register on Ease 2 Council, navigate to the registration page and follow the on-screen instructions to provide your necessary details.",
  },
  {
    id: 3,
    question:
      "What services does Ease 2 Council provide for college registration?",
    answer:
      "Ease 2 Council provides automated enrollment processes, making it easier for students to register for courses and other college-related activities.",
  },
  {
    id: 4,
    question: "Can I view my course details and schedule on Ease 2 Council?",
    answer:
      "Yes, you can easily access and view your course details and schedule on Ease 2 Council after logging into your account.",
  },
  {
    id: 5,
    question: "How do I recover my password if I forget it?",
    answer:
      'If you forget your password, you can use the "Forgot Password" option on the login page to reset it. Follow the instructions sent to your registered email.',
  },
  {
    id: 6,
    question: "Is Ease 2 Council accessible on mobile devices?",
    answer:
      "Yes, Ease 2 Council is designed to be responsive, making it accessible and user-friendly on various devices, including mobile phones and tablets.",
  },
  {
    id: 7,
    question: "What role did you play in the development of Ease 2 Council?",
    answer:
      "I led the UI design, frontend development, and overall functionality of Ease 2 Council as part of a collaborative group project.",
  },
  {
    id: 8,
    question: "Can I update my personal information on Ease 2 Council?",
    answer:
      "Certainly, you can update your personal information by logging into your account and navigating to the profile or settings section.",
  },
  {
    id: 9,
    question: "Is my data secure on Ease 2 Council?",
    answer:
      "Yes, we prioritize the security of user data. Ease 2 Council employs industry-standard security measures to protect your information.",
  },
  {
    id: 10,
    question:
      "How can I contact support if I encounter issues with Ease 2 Council?",
    answer:
      "For support, you can reach out to our helpdesk through the contact page or email us at support@ease2council.com.",
  },
  {
    id: 11,
    question: "Can I change my enrolled courses after registration?",
    answer:
      "In general, the ability to change enrolled courses may depend on your college's policies. Check with your college administration or use the contact form on Ease 2 Council for specific inquiries.",
  },
  {
    id: 12,
    question: "Is there a mobile app for Ease 2 Council?",
    answer:
      "Currently, Ease 2 Council is accessible through a web browser. However, stay tuned for any announcements regarding a mobile app.",
  },
  {
    id: 13,
    question: "How do I report a bug or provide feedback?",
    answer:
      'You can report bugs or provide feedback through the "Contact Us" section on the website. We appreciate your input to enhance the user experience.',
  },
  {
    id: 14,
    question: "Are there any tutorial resources for using Ease 2 Council?",
    answer:
      "Yes, we provide tutorial resources on the website to help users navigate through the registration process and utilize other features.",
  },
  {
    id: 15,
    question: "Is there a deadline for college registration on Ease 2 Council?",
    answer:
      "Please check with your college administration for specific registration deadlines. Ease 2 Council follows the policies set by your institution.",
  },
  {
    id: 16,
    question:
      "Can parents or guardians access Ease 2 Council on behalf of students?",
    answer:
      "Ease 2 Council is primarily designed for student use. Parental or guardian access may depend on the college's policies. Check with your college administration for details.",
  },
  {
    id: 17,
    question: "How can I track my enrollment status on Ease 2 Council?",
    answer:
      "You can track your enrollment status by logging into your account and checking the enrollment or dashboard section for real-time updates.",
  },
  {
    id: 18,
    question: "Does Ease 2 Council integrate with other college systems?",
    answer:
      "Ease 2 Council is designed to integrate seamlessly with existing college systems to provide a comprehensive registration solution.",
  },
  {
    id: 19,
    question: "Can I print my course schedule from Ease 2 Council?",
    answer:
      "Yes, you can typically print your course schedule directly from the Ease 2 Council website. Look for a print option within the schedule section.",
  },
  {
    id: 20,
    question: "Is there a fee for using Ease 2 Council?",
    answer:
      "The usage policies and any associated fees for Ease 2 Council may vary depending on your college. Please refer to your college's guidelines or contact the administration for details.",
  },
];

const Quora = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflowY: "scroll",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={4} spacing={2}>
        <Typography variant="h4">FAQ&apos;s Section</Typography>

        {/* <Stack direction="row" alignItems="flex-start" spacing={7} >
          <Box
            sx={{
              width: 360,
              //   height: 380,
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: 2,
              boxShadow: "0 0 2px rgba(0,0,0,0.25)",
            }}
            p={3}
          >
            <Stack
              spacing={2.5}
              alignItems="center"
              sx={{ width: "100%", height: "100%", mb: 20 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Create Post
              </Typography>
              <Avatar
                sx={{
                  width: "75px",
                  height: "75px",
                  border: "2px solid rgba(0,250,0,0.5)",
                }}
                src={faker.image.avatar()}
              />
              <QuoraForm />
            </Stack>
            <img src={QuestionMark} alt="questionMark" />
          </Box>

          <Divider orientation="vertical" flexItem />

          <FeedSpace />
        </Stack> */}
        <div
          style={{
            borderRadius: "8px",
            boxShadow: "0px 0px 18px rgba(0,0,0,0.10)",
          }}
        >
          {FAQData.map((faq) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<CaretDown />} id={faq.id}>
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </Stack>
    </Box>
  );
};

export default Quora;
