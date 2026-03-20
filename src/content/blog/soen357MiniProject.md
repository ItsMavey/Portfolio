---
title: "SOEN 357 - Mini Project"
description: "Presented to: Dr. Hakim Mellah. Concordia University."
pubDate: 2026-03-19T00:00:00-04:00
heroImage: "/soen357MiniProject/header.png"
---

# Project Overview

For this case study I designed a plan to help a startup create a mobile app for people with chronic health conditions.
The goal of this application is to help users with chronic health conditions manage their medications and doctor appointments.
The app allows users to set reminders, track their medication usage, and communicate with healthcare professionals.


## 1. User Research

### Methodology

The nature of the project emphasizes the importance of conducting UX research in order to really understand the needs of the individuals.
To deeply understand the needs, behaviors and pain points of the users, I decided to proceed with a mixed-methods approach.
The goal of the research was to identify the friction points in their current daily routines and explore their
comfort levels with automated data syncing and conversational interfaces.

Here are the three main phases of the approach:

#### 1-on-1 User Interviews (Qualitative)

- **Objective**

    - To uncover the emotional and practical challenges of daily health management.


- **Focus Area**

    - I would conduct interviews with patients managing conditions like Diabetes and Hypertension to discuss their daily routines.
    The advantage of using this subset of users is their need to track their multiple medications on a daily basis. We will focus on the
    question of "app fatigue" in order to understand in a deeper level how they feel about navigating complex menus just to log a single
    medication dose or check an appointment.

#### Digital Surveys (Quantitative)

- **Objective**

    - To gather broad data on tech habits and validate the desire for an active, chat-based solution.

- **Focus Area**

    - I would distribute structured surveys through online chronic illness support groups.
    To ensure comprehensive data collection, the survey would be broken down into four distinct question categories:

    - **Demographics & Context:**
    Multiple-choice questions to establish user age ranges, primary chronic conditions, and general comfort levels with mobile technology.

    - **Current Habits & Frustrations:**
    Likert scale questions (1-10) asking users to rate their frustration with manual data entry in current health apps,
    and how frequently they miss logging a dose due to "click fatigue."

    - **Feature Validation (Conversational UI):**
    Scenario-based questions measuring their willingness to interact with a conversational bot
    (e.g., "Would you prefer texting 'took my meds' over opening an app and navigating a menu?").

    - **Data Privacy & Automation:**
    Questions designed to gauge user trust and comfort levels with secure background conduits automatically pulling
    in their clinic's scheduling data, balancing the desire for convenience against potential privacy concerns.

#### Competitive Analysis

- **Objective**
    - To identify gaps in the current market of health companion applications.

- **Focus Area**
    - I would analyze the top three health-tracking apps currently on the market.
    By mapping their user flows, I aim to highlight a common flaw: a heavy reliance on passive,
    static, website-style navigation that forces the user to do all the work,
    presenting a clear opportunity for a proactive, bot-driven alternative.

### Persona

<style>
.persona-card {
display: flex;
flex-direction: column;
background: var(--text-main);
border-radius: 16px;
box-shadow: 0 10px 25px rgba(0,0,0,0.05);
border: 1px solid #e5e7eb;
overflow: hidden;
margin-bottom: 2.5rem;
font-family: system-ui, -apple-system, sans-serif;
}

@media (min-width: 768px) {
.persona-card {
  flex-direction: row;
}
}

.persona-sidebar {
background: linear-gradient(135deg, #14b8a6, #0f766e);
color: white;
padding: 2.5rem 2rem;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
}

.persona-avatar {
width: 140px;
height: 140px;
border-radius: 50%;
background-color: rgba(255,255,255,0.2);
border: 4px solid rgba(255,255,255,0.5);
display: flex;
align-items: center;
justify-content: center;
font-size: 4rem;
margin-bottom: 1.5rem;
}

.persona-sidebar h3 {
margin: 0 0 1.5rem 0;
font-size: 1.8rem;
text-align: center;
color: white;
}

.persona-stats {
width: 100%;
margin-bottom: 2rem;
}

.persona-stats div {
display: flex;
justify-content: space-between;
margin-bottom: 0.5rem;
font-size: 0.95rem;
border-bottom: 1px solid rgba(255,255,255,0.2);
padding-bottom: 0.25rem;
}

.persona-quote {
font-style: italic;
font-weight: 600;
font-size: 1.1rem;
line-height: 1.5;
text-align: center;
}

/* Right Content Area */
.persona-content {
padding: 2.5rem;
flex: 2;
}

.persona-content h4 {
color: #1f2937;
margin-top: 0;
margin-bottom: 0.5rem;
font-size: 1.3rem;
border-bottom: 2px solid #14b8a6;
display: inline-block;
padding-bottom: 0.2rem;
}

.persona-content p, .persona-content ul {
margin-bottom: 1.5rem;
line-height: 1.6;
font-size: 1rem;
color: #4b5563;
}

.persona-content ul {
padding-left: 1.5rem;
}
</style>

<div class="persona-card">
<div class="persona-sidebar">
<div class="persona-avatar">👨🏻‍💻</div>
<h3>Tyler Gibson</h3>

<div class="persona-stats">
  <div><strong>Age:</strong> <span>34</span></div>
  <div><strong>Occupation:</strong> <span>Banker</span></div>
  <div><strong>Status:</strong> <span>Single</span></div>
</div>

<div class="persona-quote">
  "I just want to log my insulin in seconds without fighting with an app."
</div>
</div>

<div class="persona-content">
<h4>About</h4>
<p>Tyler was diagnosed with Type 1 Diabetes in his early twenties.
    He leads a busy, high-stress corporate life. He knows he needs to track his blood sugar and insulin
    doses correctly for his doctor, but he gets incredibly frustrated with traditional health apps.
    He feels that having to navigate through four different screens just to enter a single number
    makes managing his condition feel like an unpaid part-time job.</p>

<h4>Habits</h4>
<ul>
  <li>Checks his phone constantly for work emails and messages.</li>
  <li>Uses voice-to-text features frequently to answer quickly.</li>
  <li>Relies heavily on his calendar every day.</li>
</ul>

<h4>Pain Points</h4>
<ul>
  <li>"Click fatigue" from navigating complex, multi-layered app menus.</li>
  <li>Interrupting his workflow just to log simple health data.</li>
  <li>Forgetting to log doses because the current process takes too long.</li>
</ul>

<h4>Goals</h4>
<ul>
  <li>Log daily health metrics in under 5 seconds.</li>
  <li>Maintain accurate data records for his doctor.</li>
  <li>Integrate his health management seamlessly into his busy life.</li>
</ul>
</div>
</div>

<div class="persona-card">
  <div class="persona-sidebar" style="background: linear-gradient(135deg, #6366f1, #4338ca);">
<div class="persona-avatar">👵🏻</div>
<h3>Emma Hunter</h3>

<div class="persona-stats">
  <div><strong>Age:</strong> <span>58</span></div>
  <div><strong>Occupation:</strong> <span>Retired Teacher</span></div>
  <div><strong>Status:</strong> <span>Married</span></div>
</div>

<div class="persona-quote">
  "I take so many different pills, I just need a simple way to know I haven't missed a dose."
</div>
</div>

<div class="persona-content">
<h4>About</h4>
<p>Emma manages Hypertension. She highly values her independence but often struggles to
    keep track of her multiple daily medications and frequent specialist appointments.
    She finds manual data entry on modern smartphones confusing. Currently, she relies on physical
    pillboxes and paper calendars, but she sometimes forgets to update them or worries she has double-booked
    a doctor's visit.</p>

<h4>Habits</h4>
<ul>
  <li>Keeps a very routine, structured daily schedule.</li>
  <li>Prefers reading simple text messages over navigating full applications.</li>
  <li>Values clear, straightforward communication without technical jargon.</li>
</ul>

<h4>Pain Points</h4>
<ul>
  <li>Manually entering complex medical appointments into physical calendars.</li>
  <li>Forgetting if she recorded the medication taken on standard pill reminder apps.</li>
  <li>Feeling overwhelmed by notification overload from complex apps.</li>
</ul>

<h4>Goals</h4>
<ul>
  <li>Never miss a medication dose.</li>
  <li>Have an automatic schedule of all her doctor appointments.</li>
  <li>Feel supported, independent, and in control of her health routines.</li>
</ul>
</div>
</div>


## 2. User Journey Mapping

To visualize how the conversational interface solves the "click fatigue" problem,
I mapped out a daily interaction scenario for Emma.

Instead of opening an app and navigating through a calendar and a medication checklist,
Emma's journey is proactive. The HealthBot initiates the interaction, and secure data conduits handle the heavy
lifting in the background. The map below outlines her touchpoints, emotional state, and potential pain points during a
standard morning routine.

<br/>

<style>
  .journey-container {
    max-width: 800px;
    margin: 2rem auto;
    font-family: system-ui, -apple-system, sans-serif;
    color: #374151;

  }

  .timeline-step {
    display: flex;
    margin-bottom: 2rem;
    position: relative;
  }

  /* The vertical connecting line */
  .timeline-step::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 24px;
    height: 100%;
    width: 2px;
    background-color: #e5e7eb;
    z-index: 1;
  }

  /* Hide the line on the last item */
  .timeline-step:last-child::before {
    display: none;
  }

  .step-number {
    width: 50px;
    height: 50px;
    background: #14b8a6; /* Teal */
color: var(--text-main);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    flex-shrink: 0;
    z-index: 2;
    box-shadow: 0 4px 6px rgba(20, 184, 166, 0.3);
  }

  .step-content {
    background: var(--text-main);
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    margin-left: 1.5rem;
    flex-grow: 1;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  }


  .step-content h3 {
    margin-top: 0;
    color: #1f2937;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .step-description {
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }

  .step-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    background: #f9fafb;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    .step-details {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .detail-item strong {
    display: block;
    color: #4338ca; /* Indigo/Navy */
    margin-bottom: 0.2rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>

<div class="journey-container">

  <div class="timeline-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h3>Proactive Trigger</h3>
      <div class="step-description">At 8:00 AM, the HealthBot sends a lock-screen notification checking if Emma has taken her morning medication.</div>
      <div class="step-details">
        <div class="detail-item">
          <strong>Touchpoint</strong>
          Lock screen notification / Push alert.
        </div>
        <div class="detail-item">
          <strong>Emotion</strong>
          Supported. Relieved she didn't have to remember the time herself.
        </div>
        <div class="detail-item">
          <strong>Pain Point</strong>
          Notification could get buried if she has too many other apps sending alerts.
        </div>
      </div>
    </div>
  </div>

  <div class="timeline-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h3>Conversational Logging</h3>
      <div class="step-description">Emma taps the notification, opening the chat interface. She simply types (or uses voice-to-text to say) "Yes, took it with breakfast."</div>
      <div class="step-details">
        <div class="detail-item">
          <strong>Touchpoint</strong>
          Bot Chat UI / Voice-to-Text input.
        </div>
        <div class="detail-item">
          <strong>Emotion</strong>
          Empowered and satisfied by how fast the process is.
        </div>
        <div class="detail-item">
          <strong>Pain Point</strong>
          Voice-to-text might misunderstand her if she speaks unclearly or has background noise.
        </div>
      </div>
    </div>
  </div>

  <div class="timeline-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h3>Conduit Automation & Confirmation</h3>
      <div class="step-description">The bot confirms the log. Simultaneously, the background conduit checks her clinic schedule and the bot does a reminder of the upcoming appointment</div>
      <div class="step-details">
        <div class="detail-item">
          <strong>Touchpoint</strong>
          Chat confirmation bubble / Background API sync.
        </div>
        <div class="detail-item">
          <strong>Emotion</strong>
          Secure and highly organized.
        </div>
        <div class="detail-item">
          <strong>Pain Point</strong>
          Trusting the system; since there is no traditional visual calendar, she has to trust the bot has the right date.
        </div>
      </div>
    </div>
  </div>

</div>


## 3. Wireframing and Prototype Design


<style>
  /* --- Color Palette Overlapping Dots CSS --- */
  .palette-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the whole block */
    margin: 2rem 0;
  }

  .palette-container {
    display: flex;
    justify-content: center; /* Centers the overlapping dots */
    padding: 1rem 0;
  }

  .color-dot {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 3px solid var(--border-color);
    transition: transform 0.5s ease;
    position: relative;
    cursor: default;
  }

  /* Pulls each dot to the left to create the overlap */
  .color-dot:not(:first-child) {
    margin-left: -30px;
  }

  /* Pops the dot to the front when hovered */
  .color-dot:hover {
    transform: scale(1.1) translateY(-5px);
    z-index: 10;
  }

  /* Individual Colors */
  .dot-1 {
    background-color: #061E29;
    color: var(--bg-main);
    z-index: 1;
  }

  .dot-2 {
    background-color: #1D546D;
    color: var(--text-main);
    z-index: 2;
  }

  .dot-3 {
    background-color: #5F9598;
    color: var(--text-main);
    z-index: 3;
  }

  .dot-4 {
    background-color: #F3F4F4;
    color: var(--bg-color);
    z-index: 4;
  }
</style>

<div class="palette-wrapper">
  <h4 style="margin-bottom: 0.5rem; color: var(--text-main);">Core Color Palette</h4>
  <div class="palette-container">
    <div class="color-dot dot-1">#061E29</div>
    <div class="color-dot dot-2">#1D546D</div>
    <div class="color-dot dot-3">#5F9598</div>
    <div class="color-dot dot-4">#F3F4F4</div>
  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

.typography-wrapper {
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem 0;
}

.typography-card {
background: var(--text-main);
border: 1px solid #e5e7eb;
border-radius: 16px;
padding: 2.5rem;
width: 100%;
max-width: 600px;
box-shadow: 0 10px 25px rgba(0,0,0,0.05);
font-family: 'Inter', sans-serif; !important
color: var(--bg-color); /* Navy text */
}

.typography-card * {
font-family: 'Inter', sans-serif; !important
}

.font-header {
display: flex;
justify-content: space-between;
align-items: flex-end;
border-bottom: 2px solid #14B8A6; /* Teal accent */
padding-bottom: 1rem;
margin-bottom: 1.5rem;
color: var(--bg-color);
}

.font-name {
font-size: 3rem;
font-weight: 700;
margin: 0;
line-height: 1;
letter-spacing: -0.02em;
color: var(--bg-color);
}

.font-type {
font-size: 1rem;
font-weight: 400;
color: var(--bg-color);
text-transform: uppercase;
letter-spacing: 0.05em;
}

.font-sample-large {
font-size: 5rem;
font-weight: 500;
margin: 0 0 1rem 0;
line-height: 1;
color: #14B8A6; /* Teal */
letter-spacing: -0.03em;
}

.font-sample-sentence {
font-size: 1.15rem;
line-height: 1.6;
margin-bottom: 2rem;
color: #374151;
}

.font-weights {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
background: #F8FAFC; /* Off-white background */
padding: 1.5rem;
border-radius: 12px;
}

.weight-item {
display: flex;
flex-direction: column;
}

.weight-name {
font-size: 0.85rem;
color: #6b7280;
text-transform: uppercase;
letter-spacing: 0.05em;
margin-bottom: 0.5rem;
}

.weight-demo {
font-size: 1.25rem;
color: #1E3A8A;
}
</style>

<div class="typography-wrapper">
<h4 style="margin-bottom: 1rem; color: var(--text-main); font-family: system-ui, sans-serif;">Typography</h4>
<div class="typography-card">

<div class="font-header">
  <h3 class="font-name" style="color: var(--bg-color)">Inter</h3>
  <span class="font-type">Primary Typeface</span>
</div>

<div class="font-sample-large">Aa</div>

<div class="font-sample-sentence">
  The chills you get when listening to music are caused by your brain
  releasing dopamine.
  <br>
  0123456789 !@#$%&*
</div>

<div class="font-weights">
  <div class="weight-item">
    <span class="weight-name">Regular</span>
    <span class="weight-demo" style="font-weight: 400;">Inter 400</span>
  </div>
  <div class="weight-item">
    <span class="weight-name">Medium</span>
    <span class="weight-demo" style="font-weight: 500;">Inter 500</span>
  </div>
  <div class="weight-item">
    <span class="weight-name">Bold</span>
    <span class="weight-demo" style="font-weight: 700;">Inter 700</span>
  </div>
</div>

</div>
</div>


## 4. Usability Testing

To validate the effectiveness of the conversational bot interface and the background data conduits,
 I have outlined a usability testing strategy.
 The primary objective is to ensure that the chat-based logging is significantly
 faster and more intuitive than traditional menu-driven health apps.

#### Testing Goals
- **Evaluate Efficiency:** Measure the time it takes for a user to log a medication dose via the chat interface compared to their current methods.

- **Assess Comprehension:** Determine if users understand how the background conduits automatically pull their clinic scheduling data without manual entry.

- **Identify Friction:** Determine the moments where the bot's prompts feel unnatural, confusing, or restrictive.

#### Key User Tasks
Participants will be given the interactive prototype and asked to complete the following three core scenarios:
- **Task 1 (The Quick Log):** "You just took your morning insulin. Use the chat interface to log 15 units." *(Testing the primary text/voice input flow).*

- **Task 2 (The Proactive Reminder):** "The app just notified you about a medication. Interact with the modal to mark it as taken." *(Testing the integration).*

- **Task 3 (The Conduit Schedule):** "The bot just informed you of an upcoming Cardiology appointment. Confirm the appointment slot provided." *(Testing trust and clarity of the automated scheduling).*

#### Feedback Collection Methods
- **Moderated Remote Testing:** Sessions will be conducted via Zoom, allowing the moderator to observe the participant and their screen interactions in real-time.

- **Post-Test Questionnaire:** A short survey utilizing a Likert scale (1-5) to measure perceived ease of use, specifically asking if they preferred this chat format over standard medical app menus.

#### Analysis & Iteration Strategy
Following the testing sessions, the feedback will be synthesized to identify recurring patterns.
- **Metrics:** If the completion time for Task 1 exceeds 10 seconds, the chat input UI needs to be simplified.

- **Iteration:** Qualitative feedback regarding the bot's prompts will be analyzed. If the users find the bot too robotic or confusing, I will iterate on the conversational design to make the prompts clearer and more human. Any visual friction, such as users missing the "Quick Reply" chips, will result in high-contrast UI adjustments in the next design iteration.

## 5. Reflection


