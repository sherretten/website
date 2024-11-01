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
					I found myself coding when I was lost and confused at a sophomore in
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
						<div class="stack">React, Typescript, Redux, Graphql</div>
						<div class="description"></div>
					</div>
				</div>
			</section>
			<section id="projects">
				<div class="projects-container">
					<div class="codewithfriends">
						<h1>Code With Friends</h1>
						<div class="date">2021 — 2024</div>
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
	.container {
		margin-left: auto;
		margin-right: auto;
		padding-left: 6rem;
		padding-right: 6rem;
		max-width: 1080px;
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
	}
	header {
		display: flex;
		flex-direction: column;
		flex-basis: 40%;
		position: sticky !important;
		max-height: 100vh;
		top: 0px;
		padding-top: 6rem;
	}
	main {
		flex-basis: 60%;
		padding-top: 6rem;
	}
	section {
		width: 100%;
		margin-bottom: 9rem;
		scroll-margin-top: 6rem;
	}
	nav {
		display: flex;
		flex-direction: column;
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
</style>
