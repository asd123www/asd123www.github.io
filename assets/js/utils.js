function createProjectElement(id, project) {
  /* Render a single publication / project row.
   *
   * Fields:
   *   title       : title of the paper or project
   *   paper_url   : link to the paper / project
   *   authors     : author list (use <strong>Your Name</strong> to bold yourself)
   *   conference  : publication venue
   *   image       : (optional) path or URL to the thumbnail image
   *   highlight   : (optional) if true, highlights the title (representative work)
   *   others      : (optional) any extra HTML, e.g. links to code / slides
   */
  if (project.tag == null)
    project.tag = id;
  if (project.others == null)
    project.others = "";

  const titleClass = project.highlight ? ' class="highlight"' : "";

  const html_img = `<img src='${project.image}' style="max-width: 160px;">`;
  const html_txt = `<p>
      <a href="${project.paper_url}"><papertitle${titleClass}>${project.title}</papertitle></a>
      <br>
      ${project.authors}
      <br>
      <em>${project.conference}</em>
      <br>
      ${project.others}
    </p>`;

  if (project.image)
    document.getElementById(id + "-img").innerHTML = html_img;
  document.getElementById(id + "-txt").innerHTML = html_txt;
}
