import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-resume-tips",
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: "./resume-tips.component.html",
  styleUrl: "./resume-tips.component.css",
})
export class ResumeTipsComponent {
  data = [
    {
      id: 1,
      title: "Tailor Your Resume for Each Job",
      description:
        "Customize your resume for each job application by highlighting relevant skills and experiences that match the specific requirements of the job posting.",
    },
    {
      id: 2,
      title: "Use Action Verbs",
      description:
        "Start bullet points with strong action verbs to convey your achievements and responsibilities clearly. For example, 'Developed', 'Implemented', 'Managed', etc.",
    },
    {
      id: 3,
      title: "Highlight Technical Skills",
      description:
        "Create a dedicated section to showcase your technical skills. Include programming languages, software tools, frameworks, and any certifications relevant to the job.",
    },
    {
      id: 4,
      title: "Quantify Achievements",
      description:
        "Quantify your accomplishments wherever possible. Use numbers and metrics to highlight the impact of your work, such as 'Increased system efficiency by 20%' or 'Reduced project delivery time by 15%.'",
    },
    {
      id: 5,
      title: "Include a Professional Summary",
      description:
        "Write a concise professional summary at the beginning of your resume. Summarize your skills, experience, and career goals in a few sentences to grab the employer's attention.",
    },
    {
      id: 6,
      title: "Showcase Projects",
      description:
        "If applicable, include a 'Projects' section to showcase relevant projects you've worked on. Provide details on the technologies used, your role, and the outcomes achieved.",
    },
    {
      id: 7,
      title: "Highlight Soft Skills",
      description:
        "In addition to technical skills, emphasize soft skills such as communication, teamwork, problem-solving, and adaptability. Employers value a combination of technical and interpersonal skills.",
    },
    {
      id: 8,
      title: "Include Education and Certifications",
      description:
        "List your educational background, degrees, and any relevant certifications. Include the name of the institution, graduation date, and relevant coursework or special achievements.",
    },
    {
      id: 9,
      title: "Use a Clean and Readable Format",
      description:
        "Choose a clean and professional resume format. Use bullet points, headers, and a consistent font to make your resume easy to read. Avoid clutter and excessive styling.",
    },
    {
      id: 10,
      title: "Proofread Carefully",
      description:
        "Before submitting your resume, proofread it carefully to eliminate typos and grammatical errors. Consider asking a friend or colleague to review your resume for a fresh perspective.",
    },
  ];
}
