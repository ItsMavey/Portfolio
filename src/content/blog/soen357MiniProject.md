---
title: "SOEN 357 - Mini Project"
description: "Presented to: Dr. Hakim Mellah. Concordia University"
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
background: #ffffff;
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

# User Journey Mapping

To visualize how the conversational interface solves the "click fatigue" problem,
I mapped out a daily interaction scenario for Emma.

Instead of opening an app and navigating through a calendar and a medication checklist,
Emma's journey is proactive. The HealthBot initiates the interaction, and secure data conduits handle the heavy
lifting in the background. The map below outlines her touchpoints, emotional state, and potential pain points during a
standard morning routine.


# Wireframing and Prototype Design

# Usability Testing

# Reflection
