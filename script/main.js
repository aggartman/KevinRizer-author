/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
   var x = document.getElementById("myNav");
   if (x.className === "nav") {
     x.className += " responsive";
   } else {
     x.className = "nav";
   }
 }

 // populate articles
function articleRender(title, excerpt, img, source) {
  const container = document.getElementById('pressMentions');

  const articleContain = document.createElement('div');
  articleContain.classList.add('articleContain');
  articleContain.setAttribute('href', source);
  articleContain.onclick = function(){window.open(source)};

  articleContain.appendChild(makeTitle(title));
  articleContain.appendChild(makeExcerpt(excerpt));
  articleContain.appendChild(placeImg(img));

  container.appendChild(articleContain);

  return container;
};

function makeTitle(title) {
  const titleContain = document.createElement('div');
  titleContain.classList.add('title');
  const titleTxt = document.createElement('h3');
  titleTxt.innerText = title;
  titleContain.appendChild(titleTxt);
  
  return titleContain;
}

function makeExcerpt(excerpt) {
  const excerptContain = document.createElement('div');
  excerptContain.classList.add('excerptContain');
  const excerptTxt = document.createElement('p');
  excerptTxt.innerText = excerpt;
  excerptContain.appendChild(excerptTxt);

  return excerptContain;
}

function placeImg(img) {
  const imgContain = document.createElement('div');
  imgContain.classList.add('logoContain');
  const imgPlace = document.createElement('img');
  imgPlace.src = img;
  imgContain.appendChild(imgPlace);

  return imgContain;
}

const insider1 = articleRender('How to Negotiate remote work status, without sacrificing your salary', 'Google employees may face a pay cut if they work from home. But experts say there\'s room for negotiation.', 'images/icons/BI_light_background_color_vertical.png', 'https://www.businessinsider.com/how-to-negotiate-remote-work-status-without-sacrificing-your-salary-2021-8#');

const associationsNow1 = articleRender('How to Ease the Transition to Your New Hybrid Work Life.', 'A remote work expert offers three simple ways to navigate the transition to a hybrid form of work. Now that everyone has experience in each world, it’s time to find the sweet spot and successfully balance a combination of both.', 'images/icons/associationsNow.png', 'https://associationsnow.com/2021/08/how-to-ease-the-transition-to-your-new-hybrid-work-life/');

const forbes1 = articleRender('Consider These 4 Tips Before Asking Your Boss To Work From Home Permanently', 'After more than a year of pandemic-induced working from home, many professionals have realized that they clearly prefer to continue some version of working from home (hybrid or full) longer term. ', 'images/icons/forbes-logo-black-and-white.png', 'https://www.forbes.com/sites/danabrownlee/2021/08/22/consider-these-4-tips-before-asking-your-boss-to-work-from-home-permanently/?sh=533a8c661018');

const ceoWorld1 = articleRender('4 Ways Smart CEOs Embrace Remote Work', 'With large numbers of employees voicing their desire to continue working remotely, and the delta variant causing companies to scrap or scale back plans to return to the office, remote work is here to stay. Smart CEOs are not fighting it, they’re embracing it. Here are four ways you can too.', 'images/icons/CEOWORLD-magazine-Logo-1.png', 'https://ceoworld.biz/2021/08/25/4-ways-smart-ceos-embrace-remote-work/');

const parade1 = articleRender('50 Tips to Break Out of a Career Rut and Make Your Day Job Feel Like Your Dream Job', 'There are few experiences more frustrating than being stuck in a career rut—especially in an uncertain economy.', 'images/icons/parade.png', 'https://parade.com/1255552/jessicasager/how-to-get-out-of-a-career-rut/')

const hrDaily = articleRender('Accommodating Hearing and Visually Impaired Employees During Remote Work', 'With a shift to remote work, hearing and visually impaired employees often find difficulty in doing their job.', 'images/icons/HR-Daily-Advisor-2016-logo-no-tag-NEW.png', 'https://hrdailyadvisor.blr.com/2021/09/27/accommodating-hearing-and-visually-impaired-employees-during-remote-work/?webSyncID=d2b675e5-ebb6-9874-8b3a-a1a190e5b9eb&sessionGUID=637a7157-d79e-9854-c5e8-c3dad9744c74');

const forbes2 = articleRender('Why Kevin Rizer Believes Hiring Disabled And Neurodiverse Employees Is Good For Business', 'In 2020, 17.9% of persons with a disability were employed, down from 19.3% in 2019, the U.S. Bureau of Labor Statistics reported. For persons without a disability, 61.8% were used in 2020', 'images/icons/forbes-logo-black-and-white.png', 'https://www.forbes.com/sites/jenniferpalumbo/2021/09/30/why-kevin-rizer-believes-hiring-disabled-and-neurodiverse-employees-is-good-for-business/?sh=3cbad1936558');

const forbes3 = articleRender('4 dicas para pedir ao seu chefe para continuar em home office permanentemente', 'Enquanto mais escritórios reabrem suas portas, mais profissionais percebem que não querem deixar o regime remoto tão cedo.', 'images/icons/forbes-logo-black-and-white.png', 'https://forbes.com.br/carreira/2021/09/4-dicas-para-pedir-ao-seu-chefe-para-continuar-em-home-office-permanentemente/');