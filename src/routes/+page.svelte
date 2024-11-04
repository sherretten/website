<div class="container">
	<div class="wrapper">
		<header>
			<h1 class="name">Nate Sherrett</h1>
			<h2>Software Engineer</h2>
			<p>I enjoy writing code and solving problems</p>
			<nav>
				<a class="section-link" href="#about">About</a>
				<a class="section-link" href="#experience">Experience</a>
				<a class="section-link" href="#projects">Projects</a>
			</nav>

			<div class="outer-links">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon"
					><title>GitHub</title><path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path></svg
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon"
					><title>LinkedIn</title><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					></path><rect x="2" y="9" width="4" height="12"></rect><circle
						cx="4"
						cy="4"
						r="2"
					></circle></svg
				>
			</div>
		</header>

		<!-- — -->
		<main>
			<section id="about">
				<h2 class="section-title">About</h2>
				<div>Hi I'm Nate, I'm a Software Engineer based out of Bend, OR.</div>
				<p>
					I found myself coding when I was a sophomore in high school. As a
					cyclist binging too many British cycling YouTubers I found myself
					frequently Googling "convert lbs to kg" and "miles to km" creating an
					Android widget to do these <i>complex</i>
					calculations. Eventually, I got it working on my phone and never published
					it, but I was proud!
				</p>
				<p>
					After college I found my first gig as a frontend developer. From day
					one I was amazed at how big of an application it was. My Largest
					projects in college were about 3000 lines with 3 other students, so I
					struggled to wrap my head around a project written by 2 people that
					could be ~300k lines. Each week was a water hose, I was drowning.
					Every time I felt like I had it all together it was time to take
					another step forward to realize I had only just begun. Welcome to
					being a software engineer.
				</p>
				<p>
					When not hacking away, you can find me cycling, not enjoying running,
					or playing the latest video games with my friends.
				</p>
			</section>

			<section id="experience">
				<h2 class="section-title">Experience</h2>
				<a href="https://nrfcloud.com" target="_blank"> </a>
				<div class="job-container">
					<h1>Nordic Semiconductor</h1>
					<div class="title">Senior Frontend Engineer</div>
					<div class="date">2021 — 2024</div>
					<div class="description">
						Designed and built many key components and workflows for the IoT
						Platform nRF Cloud >
					</div>
					<div class="stacks">
						<div class="stack">React</div>
						<div class="stack">Typescript</div>
						<div class="stack">Redux</div>
						<div class="stack">Graphql</div>
					</div>
				</div>
			</section>
			<section id="projects">
				<h2 class="section-title">Projects</h2>
				<div class="projects-container">
					<div class="codewithfriends">
						<h1>Jira Clone</h1>
						<div class="date">2024</div>
						<div class="description">
							This project is somethign sillly that I thought up to learn more
							about
							<strong>Next js</strong> and <strong>Vercel</strong>. I mostly set
							out with the plan to copy Jira but coming up with a better way to
							automate
							<i>standup's</i>.
							<div class="stacks">
								<div class="stack">Next</div>
								<div class="stack">Vercel</div>
								<div class="stack">React</div>
								<div class="stack">Python</div>
							</div>
						</div>
					</div>
					<div class="codewithfriends">
						<h1>Code With Friends</h1>
						<div class="date">2024</div>
						<div class="description">
							In collaboration with a friend, we initiated a side project
							focused on mutual skill development. The primary objective is to
							showcase contributions to projects involving fellow software
							engineers in Portland, fostering a community of continuous
							learning and improvement.
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	.name {
		font-family: cursive;
	}
	.icon {
		height: 44px;
		aspect-ratio: 1;
	}
	.section-title {
		display: none;
		@media (max-width: 600px) {
			display: block;
			margin-bottom: 1rem;
			border-bottom: 1px solid white;
		}
	}

	.container {
		margin-left: auto;
		margin-right: auto;

		max-width: 1080px;
		@media (max-width: 900px) {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		@media (max-width: 600px) {
			flex-direction: column;
		}
	}
	header {
		display: flex;
		flex-direction: column;
		padding-top: 6rem;

		@media (max-width: 600px) {
		}
		@media (min-width: 601px) and (max-width: 900px) {
			/* Styles for tablets */
		}
		@media (min-width: 901px) {
			position: sticky;
			max-height: 100vh;
			top: 0px;
			flex-basis: 40%;
		}
	}
	main {
		flex-basis: 60%;
		padding-top: 6rem;
		@media (max-width: 900px) {
			padding-top: 2rem;
		}
	}
	section {
		width: 100%;
		margin-bottom: 6rem;
		scroll-margin-top: 3rem;
	}
	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media (max-width: 600px) {
			display: none;
		}
	}
	a {
		color: inherit;
		text-decoration: none;
		font-weight: bold;
		width: fit-content;
	}
	a:visited {
		text-decoration: none;
		color: inherit;
	}
	a:active {
		border: 1px solid goldenrod;
	}
	.section-link::after {
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		content: "";
		height: 1px;
		width: 0px;
		position: relative;
		display: block;
		background-color: black;
	}
	.section-link:hover::after {
		width: 100%;
	}

	.codewithfriends {
		margin-bottom: 3rem;
	}

	.stacks {
		display: flex;
		gap: 8px;
	}
	.stack {
		padding: 0.25rem;
		border: 2px solid goldenrod;
		font-weight: bold;
		background-color: hotpink;
		width: fit-content;
		transform: skewX(-25deg);
	}
</style>
