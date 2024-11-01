<div class="container">
	<div class="wrapper">
		<header>
			<h1 class="name">Nate Sherrett</h1>
			<h2>Software Engineer</h2>
			<p>I enjoy writing code and solving problems</p>
			<nav>
				<a href="#about">About</a>
				<a href="#experience">Experience</a>
				<a href="#projects">Projects</a>
			</nav>
		</header>

		<!-- — -->
		<main>
			<section id="about">
				<div>Hi I'm Nate, I'm a Software Engineer based out of Bend, OR.</div>
				<p>
					I found myself coding when I was dazed and confused as a sophomore in
					high school. My first desire, like many other aspiring software
					developers, was to build video games which lasted about as long as it
					took me to get a character to interact properly with a wall.
				</p>
				<p>
					After college I found my first gig as a frontend developer. I really
					enjoy the instant gratification of ________. Currently I'm looking
					forward to becoming a more well rounded engineer with a focus on
					full-stack.
				</p>
				<p>
					When not hacking away, you can find me cycling, not enjoying running,
					or playing the latest video games that my friends made me buy.
				</p>
			</section>

			<section id="experience">
				<div>
					<div class="job-container">
						<h1>Nordic Semiconductor</h1>
						<div class="title">Senior Frontend Engineer</div>
						<div class="date">2021 — 2024</div>
						<div class="description">
							Designed and built many key components and workflows for the IoT
							Platform <a href="https://nrfcloud.com">nRF Cloud</a>
						</div>
						<div class="stacks">
							<div class="stack">React</div>
							<div class="stack">Typescript</div>
							<div class="stack">Redux</div>
							<div class="stack">Graphql</div>
						</div>
					</div>
				</div>
			</section>
			<section id="projects">
				<div class="projects-container">
					<div class="codewithfriends">
						<h1>Some project that I'm making up.</h1>
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
				</div>
			</section>
		</main>
	</div>
</div>

<style>
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
		margin-bottom: 9rem;
		scroll-margin-top: 6rem;
	}
	nav {
		display: flex;
		flex-direction: column;
		@media (max-width: 600px) {
			display: none;
		}
	}
	a {
		color: inherit;
		text-decoration: none;
		font-size: 1.5em;
	}
	a:visited {
		text-decoration: none;
		color: inherit;
	}
	a:active {
		border: 1px solid goldenrod;
	}

	.job-container {
		/* background-color: white; */
		/* color: black; */
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
		/* translate:; */
		transform: skewX(-25deg);
		/* rotate: 25deg; */
	}
</style>
