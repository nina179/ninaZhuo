# ninaZhuo
This repository houses the source code for the portfolio website of Nina Zhuo (me). It displays creative writing and website design work, houses a blog platform with an discussion boards, and provides means to contact and comission further works and bookings. The website will be fully keyboard accessible.

## home.html
This page serves as an introduction to the website my creative philosophies. It is styled as a magazine cover and includes a brief letter of introduction outlining goals, professional interests, past experiences, and my approach to creativity as an academic and as a poet. It is designed for desktop dimensions and will (hopefully) adapt to phone screens as well.
### Components
+ Two column table to style page as an open magazine with cover on left, editor's note style letter on right
+ Background image with alt text serving as "magazine cover"
+ Linked h2 elements that redirect to appropriate subpages
### Nesting
+ NINA ZHUO
    + About (linked)
        + details about my education, work experience, goals and aspirations, current projects, points of contact, etc. etc. 
    + Portfolio (linked)
        + poems, essays, short stories, and sample websites for your viewing pleasure. always looking for publication opportunities and commisions!
    + Blog (linked)
        + where I play around with things I’ve been experiencing, where I play around with things I’ve been experiencing, books I’ve been reading, thoughts that I’m lingering on. Also a few bad poems, books I’ve been reading, thoughts that I’m lingering on. Also a few bad poems
    + Hello!
        + I am a writer, scholar, and website designer...

## about.html
This page serves as a more detailed introduction to my professional experience and specific research interests. It includes the city where I'm currently based, my contact information, and a sort of statement of objectives. It's like a cute resume. 
### Components
+ Side navigation including links to home page, about page (active status), portfolio, and blog
+ Headshot photo with alt text and caption describing who I am, the work I do, and where I am based
+ List with professional details 
### Nesting
+ Nina Zhuo
    + About 
        + Education
            + Swarthmore College 2025, B.A. in English Literature and Computer Sceince
        + Experience
            + Voices, webmaster and senior managining editor, 2022-2025
            + ReVision, founder and freelance editor, 2021-2025
            + Swarthmore Review, section editor, 2022-2025
            + Writing Associates Fellowship, peer editor and mentor, 2022-2025
            + Aydelotte Foundation Student Fellow, 2023-2025
            + LibLab Fellow, 2023
            + American Foundation for the Blind, talent lab intern, 2023-2024
            + Swarthmore ITS, accessibility remediation specialist, 2022-2025
        + Awards
            + Genevieve Ching-Wen Lee Grant, 2025
            + Lois Morrell Poetry Award, 2025
            + Richard Rubin Scholar, 2022-2025
        + Specializations and Interests
            + My creative work utilizes multimedia expression, drawing inspiration from visual art installations, literary criticism, and print cultures. Immersed in aesthetic theories, gender expression, and identity formation, I deal largely in lyrical prose that grapples with topics of queerness, solitude, and the political self. Currently, I am heavily inspired by Sianne Ngai's *Theory of the Gimmick* and Ju Yon Kim's *The Racial Mundane*. 
        + Ongoing Projects 
            + *whitespace* is a text-only piece of print work distributed in limited quanities across urban arts campuses. This zine is produced in collaboration with Ark Lu, a graphic design student at the Pratt Institute. We feature short form text based content centered on politics of creativity and inspiration in contemporary youth culture with some visual art featured on our Instagram page.
            + *RELIC* is a photography focused found object publication made in collaboration with an expansive network of photographers and thinkers investigating the meaning-making processes at work in the relationships between artists, their work, and their audiences. This is an online publication with limited print copies distributed as found object pieces in various U.S. locations.
        + Inquiries
            + For commissions, bookings, and all other inquiries, contact me at nzhuo5392@gmail.com. I am currently open to portfolio website building, writing commissions, and editorial work. 

## portfolio.html
This page houses links to my work, mostly hosted in this site but (hopefully!!) will also begin to be populated with links to published works on external sites with external groups, organizations, and artists.
### Components
+ Side navigation including links to home page, about page, portfolio (active status), and blog
+ Search or filter component
+ List of work components aka sample work class divs
    + includes title (linked), date published or written, and type of piece
    + should be able to sort and search by title, month and year, and type
### Nesting
+ NINA ZHUO
    + Portfolio
        + Titles (linked)
### Subpages 
+ Portfolio_title_PieceType.html
    + date and genre tags
    + text content
    + previous page button (breadcrumb?) at bottom of the page taking you back to preivous location

## blog.html
This page is the landing page for more informal pieces with book and movie reviews, reflections and ramblings, and my less polished poetry. 
### Components
+ Side navigation including links to home page, about page, portfolio , and blog (active status)
+ Search or filter component
+ List of work components aka sample work class divs
    + includes title (linked), date published or written, and location written
    + should be able to sort and search by title, month and year, and location
### Nesting
+ NINA ZHUO
    + Blog
        + Titles (linked)
### Subpages 
+ Blog_title_Month0024.html
    + date and location
    + text content
    + previous page button (breadcrumb?) at bottom of the page taking you back to preivous location