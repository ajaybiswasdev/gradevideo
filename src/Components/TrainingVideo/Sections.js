import trainVideo1 from '../../Assets/Video/trainVideo1.mp4';
import trainVideo2 from '../../Assets/Video/trainVideo2.mp4';
import trainVideo3 from '../../Assets/Video/trainVideo3.mp4';
import trainVideo4 from '../../Assets/Video/trainVideo4.mp4';
import trainVideo5 from '../../Assets/Video/trainVideo5.mp4';
import trainVideo6 from '../../Assets/Video/trainVideo6.mp4';
import trainVideo7 from '../../Assets/Video/trainVideo7.mp4';
import trainVideo8 from '../../Assets/Video/trainVideo8.mp4';
import trainVideo9 from '../../Assets/Video/trainVideo9.mp4';
import trainVideo10 from '../../Assets/Video/trainVideo10.mp4';
import trainVideo11 from '../../Assets/Video/trainVideo11.mp4';

export const Sections = [
    {
        id: 1,
        title: 'Training',
        description: 'These training videos are critical to you understanding how GradeGetter works, and how you fit into the overall structure and culture of the company. At the end of each training video, you will be presented with a set of questions related to the video you just watched. If you successfully answer all the questions, it will proceed to the next video. You will need to watch all videos and pass all the quizzes to become a verified GradeGetter tutor.',
        video_src: trainVideo1,        
        show_questions: false,
        submitted: false,
        questions: []
    },
    {
        id: 2,
        title: 'Tutors Profile',
        description: '',
        video_src: trainVideo2,   
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Tutors don’t need a complete profile since the lessons are online?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'Tutors don’t have to enter all the subjects they can tutor for each grade level they are interested in tutoring?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'Tutors don’t have to set their availability since the lessons are done online?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            }
        ]
    },
    {
        id: 3,
        title: 'My Clients',
        description: '',
        video_src: trainVideo3,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Tutors can wait up to 12 hours before contacting a new client that was assistant to them?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'All clients get a FREE 30 demo lesson and the tutor gets paid for it?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'Tutors are not required to be early for their first lesson with student?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            }
        ]
    },
    {
        id: 4,
        title: 'Alerts',
        description: '',
        video_src: trainVideo4,
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Can I get assigned a client if I didn’t respond to an alert?',
                sub: [ 'YES', 'NO' ],
                answer: '',
                correct_answer: 'NO',
            },
            {
                main: 'When does the system mark an alert as closed?',
                sub: [ 'When up to 10 tutors express interest in the alert', 'When up to 5 tutors express interest in the alert', 'An alert will never get marked as closed', '24 hours after the alert was created'],
                answer: '',
                correct_answer: 'When up to 5 tutors express interest in the alert'
            },
            {
                main: 'How do we choose a tutor to work with a client from the list of tutors who express interest on an alert?',
                sub: [ 'We use their reviews', 'We use their effort score', 'The first person to respond to the alert gets the client' ],
                answer: '',
                correct_answer: 'We use their effort score',
            }
        ]
    },
    {
        id: 5,
        title: 'Schedule A Lesson',
        description: '',
        video_src: trainVideo5,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Tutors are not able to schedule a lesson for their student',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: "Tutors don’t have to take clients' time zone into consideration when scheduling a lesson for the client?",
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'The system does not let tutor schedule recurring lessons with their students',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            }
        ]
    },
    {
        id: 6,
        title: 'My Lessons',
        description: '',
        video_src: trainVideo6,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Tutor gets paid 75% if a client cancels the lesson in less than 24 hours',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'There is no effect on the tutors effect score if they cancel a lesson for no reason',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'The tutor can schedule lesson for a client even if the client does not have any credit',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            }
        ]
    },
    {
        id: 7,
        title: 'My Money',
        description: '',
        video_src: trainVideo7,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Tutors can cash out immediately after completing a tutoring lesson',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',

            },
            {
                main: 'A $1 fees is charged by GradeGetter each time a tutor cashes out',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'Tutors have to wait for 80 hours before they can cash out their earnings for a completed lesson',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            }
        ]
    },
    {
        id: 8,
        title: 'Effort Score',
        description: '',
        video_src: trainVideo8,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'What does client continuation rate mean?',
                sub: [ 'The number of clients who continue to use our services', 'The number of clients a tutor expresses interest in working with', 'None of the above' ],
                answer: '',
                correct_answer: 'None of the above',
            },
            {
                main: 'Canceling sessions with students will positively impact your effort score?',
                sub: [ 'YES', 'NO' ],
                answer: '',
                correct_answer: 'NO',
            },
            {
                main: 'Which of the factors below does not affect your effort score?',
                sub: [ 'Reviews', 'Session report', 'Alert response time', 'All of the above affects effort score' ],
                answer: '',
                correct_answer: 'All of the above affects effort score',
            },
        ]
    },
    {
        id: 9,
        title: 'Blog',
        description: '',
        video_src: trainVideo9,        
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'You can only create blogs using topics provided by GradeGetter content team',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'Blogs are not reviewed by the content team before publishing?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
            {
                main: 'You can submit blogs copied from other websites?',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'False',
            },
        ]
    },
    {
        id: 10,
        title: 'Online Tutoring',
        description: '',
        video_src: trainVideo10,  
        show_questions: false,
        submitted: false,
        questions: [
            {
                main: 'Apart from video communication, tutors can also communicate with their student via chat during the lesson',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'True',
            },
            {
                main: 'You can lock a text or an image on the whiteboard',
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'True',
            },
            {
                main: 'Does the tutoring system have an interphase for coding?',
                sub: [ 'YES', 'NO' ],
                answer: '',
                correct_answer: 'YES',
            },
            {
                main: "You’re able to export your zip file at any point during a coding lesson",
                sub: [ 'True', 'False' ],
                answer: '',
                correct_answer: 'True',
            },
        ]
    },
    {
        id: 11,
        title: 'Culture',
        description: '',
        video_src: trainVideo11,
        show_questions: false,
        submitted: false,
        questions: []
    },
];