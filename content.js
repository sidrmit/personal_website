/* Personal site content. */
window.SITE_CONTENT = {
  name: "Siddhartha Siddhiprada Bhoi",
  intro: "I’m Siddhartha Siddhiprada Bhoi. My work is in applied cryptography; my camera keeps a record of the world beyond the page.",
  about: "I’m Siddhartha Siddhiprada Bhoi, an applied cryptography researcher. My publications explore post-quantum security, homomorphic encryption, and coding theory. Away from the papers, I keep photos of trains, open skies, and evenings I want to remember.",
  profiles: {
    scholar: "https://scholar.google.com/citations?user=NwAXXOwAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/siddhartha-siddhiprada-bhoi-842861a0/"
  },
  sides: [
    {
      slug: "research", number: "01", name: "The researcher",
      subtitle: "Homomorphic encryption, post-quantum security, and coding theory.",
      note: "Ideas at the edge of cryptography.", color: "lilac", symbol: "✳",
      detail: "My research looks at ways to protect information while it is being used, and at how cryptography can evolve for a post-quantum world. My publications also explore constrained codes for DNA-based storage.",
      profileLabel: "More research on Google Scholar", profileUrl: "scholar",
      publications: [
        { title: "Future Digital Identity Management With Quantum Secure Blockchain", venue: "IEEE Communications Surveys & Tutorials · 2026", url: "https://doi.org/10.1109/COMST.2025.3608794" },
        { title: "Post-Quantum Homomorphic Encryption: A Case for Code-Based Alternatives", venue: "Cryptography · 2025", url: "https://www.mdpi.com/2410-387X/9/2/31" },
        { title: "Construction of DNA Codes with Multiple Constrained Properties", venue: "Cryptography and Communications · 2024", url: "https://link.springer.com/article/10.1007/s12095-024-00718-x" }
      ]
    },
    {
      slug: "cryptographer", number: "02", name: "The cryptographer",
      subtitle: "Applied cryptography, secure computation, and collaboration.",
      note: "Professional work and current updates.", color: "orange", symbol: "◒",
      detail: "Applied cryptography connects the research I do with real questions about privacy and secure computation. My LinkedIn profile has more about my professional experience, services, and current work.",
      profileLabel: "Connect with me on LinkedIn", profileUrl: "linkedin"
    },
    {
      slug: "photography", number: "03", name: "The photographer",
      subtitle: "A camera, a point of view, and a reason to pause.",
      note: "Photos and the stories behind them.", color: "blue", symbol: "◉",
      detail: "Photography is one way I pay attention to the world around me. I keep returning to evening light, railway journeys, and quiet paths that disappear into the trees.",
      galleryHeading: "Frames I’ve kept",
      galleryIntro: "From two evenings in 2018 to a misty walk in Tasmania.",
      gallery: [
        { src: "assets/photos/rail-at-dusk.jpg", alt: "A passenger train and railway tracks beneath a glowing sunset.", caption: "Railway at dusk · 27 October 2018" },
        { src: "assets/photos/campus-at-dusk.jpg", alt: "An open field beneath evening clouds and shafts of sunlight.", caption: "Evening light · 1 November 2018" },
        { src: "assets/photos/tasmania-hidden-trail-01.jpg", alt: "A narrow dirt track disappearing into a dense Tasmanian forest.", caption: "The path ahead · Tasmania · 22 December 2025" },
        { src: "assets/photos/tasmania-hidden-trail-02.jpg", alt: "A stone path beneath a canopy of trees in the mist.", caption: "Beneath the canopy · Tasmania · 22 December 2025" },
        { src: "assets/photos/tasmania-hidden-trail-03.jpg", alt: "A rocky trail winding through misty trees and scrub.", caption: "The rocky bend · Tasmania · 22 December 2025" }
      ]
    },
    {
      slug: "writing", number: "04", name: "The writer",
      subtitle: "Poems and passing thoughts, gathered between the lines.",
      note: "Captions that grew into something more.", color: "green", symbol: "✎",
      detail: "Some captions needed a few more lines than a photograph could hold. These poems came from a walk, a faraway thought, and the feeling of being on the move.",
      writings: [
        {
          title: "The hidden trail", date: "2025-12-22", dateLabel: "22 December 2025", place: "Tasmania, Australia",
          text: "The sun may dip, the shadows may creep,\nWith miles to go before I sleep.\nBut I will take the jagged bend,\nAnd let the wandering be the end.\n\nFor though the easy path is fast,\nIt’s the hidden trail where memories last.\nI’d rather stumble toward the sun\nThan finish a race I never run."
        },
        {
          title: "In youth’s dark bloom", date: "2025-06-22", dateLabel: "22 June 2025", place: "12 Apostles, Australia",
          text: "In youth's dark bloom, my spirit yearns,\nFor silver strands where wisdom learns.\nA hurried wish, through decades' flight,\nTo wear the gray, and claim its light......"
        },
        {
          title: "Mera raasta", date: "2025-03-27", dateLabel: "27 March 2025", place: "",
          text: "Rahon pe chalta musafir hu main,\nNa jane kis ki talash mein hun main,\nWaqt ki tez hawaon se bhagta\nApni hi parchhaiyin se ladhta hun main.\nNa koi thikaana, na koi aasra,\nBas safar hai mera, mera raasta."
        }
      ]
    },
    {
      slug: "travel", number: "05", name: "Travel diaries",
      subtitle: "Train windows, evening skies, and moments worth keeping.",
      note: "Photos from the road and places along the way.", color: "orange", symbol: "↗",
      detail: "A small beginning to my travel diaries: two photographs from October and November 2018. One looks out alongside a train at sunset; the other keeps an evening sky over an open field.",
      galleryHeading: "Scenes along the way",
      galleryIntro: "Two moments I kept from 2018.",
      gallery: [
        { src: "assets/photos/rail-at-dusk.jpg", alt: "A passenger train and railway tracks beneath a glowing sunset.", caption: "Train window · 27 October 2018" },
        { src: "assets/photos/campus-at-dusk.jpg", alt: "Evening sunlight falling across an open field.", caption: "Last light over the field · 1 November 2018" }
      ],
      showVisitMap: true,
      visitedPlaces: [
        { city: "Tasmania", country: "Australia", lat: -42.0, lon: 147.0 },
        { city: "12 Apostles", country: "Australia", lat: -38.66, lon: 143.1 }
      ]
    }
  ]
};

