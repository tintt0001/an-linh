/*!
 * Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
import data from "../data/invitee.json" assert { type: "json" };

window.addEventListener("load", () => {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let idUser = urlParams.get("user_name");
    0;
    if (idUser) {
      localStorage.setItem("user_name", idUser);
      window.history.pushState({}, document.title, window.location.pathname);
    } else {
      idUser = localStorage.getItem("user_name");
    }
    if (idUser) {
      const nameInvitee = data.filter((invitee) => {
        return idUser === invitee.path;
      });
      if (nameInvitee && nameInvitee.length > 0) {
        const elementEvName = document.getElementById("invitee-name");
        elementEvName.textContent = nameInvitee[0].name;
      }
    }
  } catch (error) {}
});
