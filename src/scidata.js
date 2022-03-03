const data = [
    {
      Rock_Name: "Aragonite",
      Pic : "Aragonite.jpg",
      Chemical_Composition: "Ca, CO3",
      Color: `White, red, yellow, orange, green, purple, gray, blue, brown`,
      Type:"Mineral",
      Transparency: "Translucent to transparent",
      Origin_and_Formation: "Formed by biological and physical processes, including precipitation from marine and freshwater environments.",
      Inferences: "Usually part of marine skeletal structures.",
  Availability_on_Mars: "Not found yet"
    },
    {
      Rock_Name: "Barite",
      Pic : "Barite.jpeg",
      Chemical_Composition: " Ba, SO4",
      Color: `colorless, white, light shades of blue, yellow, gray, brown `,
      Type:"Mineral",
      Transparency: "Transparent to Translucent",
      Origin_and_Formation: "Mineralization due to microbial respiration is responsible for barite formation.",
      Inferences: "Barites can trap primordial organic molecules and gasses. Directly associated with fossilized microbial mats. Bioindicator for microbial presence",
  Availability_on_Mars: "Not found yet"
    },
    {
      Rock_Name: "Limestone",
      Pic : " Limestone.jpg",
      Chemical_Composition: " CaCO3",
      Color: `Wite to grey, greyish-blue, yellow-mustard `,
      Type:"Sedimentary rock",
      Transparency: "Opaque",
      Origin_and_Formation: " Lithification of loose carbonate sediments, carbonates mostly marine environments.",
      Inferences: "Could have fossil content, biogenic oozes >30% skeletal debris by aragonite secreting plankton, coccoliths, foraminiferans.",
  Availability_on_Mars: "Not found yet"
    },
    {
      Rock_Name: "Limonite",
      Pic : "limonite.png",
      Chemical_Composition: "FeO(OH)·nH2O",
      Color: `yellow to brown`,
      Type:"iron ore, iron-rich sedimentary rock, mineral",
      Transparency: "Opaque",
      Origin_and_Formation: "hydration of hematite ad magnetite, oxidation and hydration of iron rich sulphide minerals",
      Inferences: "  Mostly contains goethite, it is a mixture of various iron oxide minerals.",
  Availability_on_Mars: " albedo, color, polarization duplicate that of right regions on mars"
    },
    {
      Rock_Name: "Magnesite",
      Pic : "Magnesite.jpg",
      Chemical_Composition: "MgCO3",
      Color: `Colorless, white, pale yellow, pale brown, faintly pink, lilac-rose (white with grey-black strokes) `,
      Type:"Mineral",
      Transparency: "Opaque, transparent.",
      Origin_and_Formation: "alteration product of ultramafic rocks, serpentinite. Magnesium-rich rocks or carbonate rocks are altered by metamorphism or chemical weathering. saline systems magnesite precipitates are found associated to microbial mats.",
      Inferences: "Presence of water and olivine.",
  Availability_on_Mars: "Yes"
    },
    {
      Rock_Name: "Mackinawite",
      Pic : "mackinawite40726a.jpg",
      Chemical_Composition: "(Fe,Ni)1+xS (where x = 0 to 0.11)",
      Color: `bronze to grey-white`,
      Type:"mineral",
      Transparency: "Opaque",
      Origin_and_Formation: "H2S or HS− with Fe (II) forms this mineral may form as a metastable product of sulfidation of goethite in the CH4 atmosphere but only when CO2 is added.",
      Inferences: "This mineral is usually found in Sulphur reducing bacteria cultures. Stable in anaerobic conditions but on exposure to oxygen, it will oxidise to form iron sulphates, iron oxyhroxides, elemental sulphur and sulphuric acid. Immobilization of heavy metals. Amorphous iron sulphide could turn into poorly crystalline mineral.",
  Availability_on_Mars: " For martian anoxic environment and based on the available reactants, Fe and S, if microbes were present, mackinawite would be present in abundance"
    },{
      Rock_Name: "Magnetite",
      Pic : "magnetite.png",
      Chemical_Composition: "Fe3O4",
      Color: `black, brownish-black, metallic lustre`,
      Type:"mineral, found in igneous, sedimentary and metamorphic rocks",
      Transparency: "Opaque",
      Origin_and_Formation: "Magnetite is formed by the reaction between ferric iron mats and Fe(II) anaerobically.",
      Inferences: "Pure magnetite particles are biomineralized in magnetosomes, produced by several species of magnetotactic bacteria",
  Availability_on_Mars: "yes"
    },{
      Rock_Name: "Micrite",
      Pic : "micrite.jpg",
      Chemical_Composition: " lime mud; CaCO3",
      Color: ` olive, white, brown, grey, mustard`,
      Type:"carbonate rock",
      Transparency: "Opaque",
      Origin_and_Formation: " one of the most common carbonate rocks form readily in the upper regions of tidal flats",
      Inferences: "micrite might be produced by microbial precipitation in sedimentary environments, either aerobic or anaerobic. The occasional occurrence of iron oxides lining the cavity walls suggests that the environment in which micrite precipitated was oxic.",
  Availability_on_Mars: " Martian regolith has calcium and carbon found in limestone but the availability of micrites is still not confirmed"
    },
    {
      Rock_Name: "Montmorillonite",
      Pic : "mica.jpg",
      Chemical_Composition: "(Na,Ca)0.33(Al,Mg)2(Si4O10)(OH)2·nH2O",
      Color: `white pale pink, blue, yellow, red, green`,
      Type:"phyllosilicate mineral",
      Transparency: "translucent to opaque",
      Origin_and_Formation: "soft phyllosilicate group of minerals that form when they precipitate from water solution as microscopic crystals, known as clay.",
      Inferences: "MMT undergoes a series of interactions with microorganisms, including adsorption, aggregation, nucleation, and mineralization.",
  Availability_on_Mars: "evidence of MMT was found on Columbia hills."
    },{
      Rock_Name: "Olivine",
      Pic : "Olivine.jpg",
      Chemical_Composition: "(Mg,Fe)2SiO4",
      Color: `olive green, yellow, black, grey`,
      Type:"mineral",
      Transparency: "translucent to opaque",
      Origin_and_Formation: "Olivine is often found in dark-coloured igneous rocks found on the surface of the Earth. It usually crystallizes in the presence of plagioclase and pyroxene to form gabbro or basalt. Crystals of olivine are sometimes formed during the metamorphism of dolomitic limestone or dolomite.",
      Inferences: " some microbes can use ferrous iron Fe(II) from the igneous mineral olivine as an electron donor and O2 as an electron acceptor.",
  Availability_on_Mars: " It is available, Most of the olivine-rich surfaces are associated with a global lava-flooding event around 3.7 billion years ago when magma erupted onto the surface through fractures in the floors of impact craters, forming lava 'seas'"
    },
    {
      Rock_Name: "Opal",
      Pic : "opal.jpg",
      Chemical_Composition: "SiO₂·nH₂O",
      Color: `white with muti colours, green, blue, yellow, purple, blue, orange.`,
      Type:" mineraloid, hydrated amorphous form of silica",
      Transparency: " completely transparent to opaque",
      Origin_and_Formation: " Opal is formed from a solution of silicon dioxide and water. As water runs down through the earth, it picks up silica from sandstone and carries this silica-rich solution into cracks and voids, caused by natural faults or decomposing fossils. As the water evaporates, it leaves behind a silica deposit.",
      Inferences: "Biogenic opal produced by vascular plants, diatoms, and siliceous sponges have been found in soils and terrestrial sediments.",
  Availability_on_Mars: "evidence of hydrated silica found on mars."
    },{
      Rock_Name: "Phosphorites",
      Pic : "phosphorite.jpg",
      Chemical_Composition: " Ca10(PO4)6(X)2, where X is F−, OH− or Cl−.",
      Color: `green, yellow, grey, mustard`,
      Type:"non-detrital sedimentary rock",
      Transparency: "opaque",
      Origin_and_Formation: "Phosphorite is also formed in regions of oceanic upwelling where large volumes of phosphate-rich cold water rise from great depths to the surface.",
      Inferences: " Possible fossilized bacteria are known from ancient phosphatic mineral deposits. Potentially, the fossilized cells represent the remains of bacteria that induced the formation of those phosphorites",
  Availability_on_Mars: " Not confirmed"
    },
    {
      Rock_Name: "Scoria",
      Pic : " Scoria.jpg",
      Chemical_Composition: "SiO2, CaO, K2CO3, NaHCO3",
      Color: `Black, Brown, Dark Gray, Deep Reddish Brown, `,
      Type:" Igneous rock",
      Transparency: "Opaque",
      Origin_and_Formation: "Volcanic. Formed when magma containing abundant dissolved gas flows from a volcano or is blown out during an eruption. Gas escapes forming bubbles and rock is solidified.",
      Inferences: "Indicator of volcanic activity. Possible cement substitute. Could be used for civilization in the future.",
  Availability_on_Mars: "Yes"
    },
    
    
    {
      Rock_Name: "Shale",
      Pic : "Shale.jpg",
      Chemical_Composition: "quartz, Fe2O3, Fe(OH)2, micaceous minerals,",
      Color: `gray, black`,
      Type:"Sedimentary rock",
      Transparency: "Opaque",
      Origin_and_Formation: "Geological rock rich in clay formed when it deposits in fairly quiet environments at the bottom of seas and lakes",
      Inferences: " Produces a geochemical environment deep inside the surface that can host microbial life.",
  Availability_on_Mars: "Yes"
    },
   
   
  ]
    
  export default data;
  