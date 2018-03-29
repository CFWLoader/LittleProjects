'use strict';

const betaSynData = [0.717620059340276,0.863920109689274,0.582910748032715,0.858519625078609,0.0942763891218692,0.801675842522997,0.516569045719703,0.755352619334871,0.627199760060671,0.557428710381193,0.617052269531739,0.506476575140194,0.536893975196531,0.440058059283667,0.575138286941076,0.487054133209293,0.286249498413853,0.877171009492494,0.805760598403997,0.281868764412698,0.275135124182707,0.38919547706243,0.749682273436306,0.33921815590529,0.852756481071113,0.402275937787989,0.699123307665604,0.3223888769613,0.569652410635061,0.580047085980066,0.602533788694064,0.644563479879876,0.355732981334175,0.664900685398491,0.768627473906218,0.500649225957455,0.654921468301963,0.672167749044737,0.821147937405074,0.652910764407482,0.807552677998179,0.536727723968708,0.571078317278771,0.712621073534116,0.891218182630581,0.901733304329619,0.816697942210968,0.36577965566768,0.205950166752331,0.669466945711002,0.929921810853809,0.75220186888781,0.303247563476792,0.709503246934176,0.923479622287575,0.294248643136241,0.344540260014525,0.260801632896663,0.556258249445752,0.630087649398802,0.711760369314649,0.723320780924031,0.822611723877265,0.427824329511102,0.223264787716065,0.391205389231554,0.414874371493658,0.396219038123751,0.43587515640581,0.763764229470558,0.705600689709577,0.315723113803621,0.341568880227541,0.529032943415909,0.357070815453892,0.931436479911976,0.442969351327648,0.333928605690681,0.833415076564047,0.850748085098203,0.503082249952201,0.457889858189333,0.552405179690097,0.947940384754512,0.648285796819078,0.411021728376111,0.820937306819068,0.491982922351539,0.51905967084087,0.683709519900048,0.829288489048253,0.947465075528137,0.945464935080523,0.150751256353376,0.621959402807556,0.447547828506606,0.809337348060341,0.547461561039522,0.394605863753528,0.893217927871158,0.889733093802728,0.507888734647342,0.266484890208451,0.756179070921574,0.667966258726838,0.851552195976364,0.614496276489983,0.759158850625902,0.765268205113202,0.650790778277769,0.706657946680719,0.666516503111615,0.76239577610897,0.809778870170171,0.913652292701237,0.616935611387448,0.349091892519058,0.852532460522144,0.471522614480541,0.565023549668843,0.93727407547271,0.809695794590205,0.686039794706128,0.812811069482223,0.841908671123792,0.527365381820545,0.419220189669565,0.175960186869,0.479501852813507,0.922705228175518,0.831659085684786,0.862810850593703,0.901651495855203,0.413573150749264,0.964791014479512,0.681261877525663,0.528894199321313,0.794634483172737,0.790399922552916,0.734162710573444,0.435045014460867,0.646951667538083,0.238744174088448,0.840403476611282,0.837058265730135,0.641735509297925,0.984767703678021,0.741225471389483,0.570334613375223,0.350460022290669,0.411954083059075,0.678004269138716,0.708270501884358,0.484351015168865,0.124331650316873,0.764909268195527,0.624913566346769,0.689444362277337,0.852171944700881,0.567688624962332,0.320294474394768,0.885672408250059,0.908923998411561,0.341397172266114,0.432622065607446,0.61982964771632,0.486524245824574,0.486818997266574,0.462105976542873,0.852503203811615,0.552154598300735,0.642389736020911,0.702078952380131,0.559097481843477,0.441945613202706,0.330401481364663,0.87159923808798,0.83894659547799,0.503412562531627,0.888017323481765,0.346356914876649,0.905645456485852,0.413105551334256,0.668665140846248,0.498934869692887,0.489681799885757,0.459925571607715,0.580947867871236,0.414939538757823,0.716741062724762,0.639108843102146,0.49945302166457,0.361946612475675,0.732083902135053,0.465067080139746,0.722252515646484,0.375114084621983,0.832512110327606,0.836213821527177,0.728468838113023,0.274061901993805,0.781377919694275,0.412295858886006,0.675134177361688,0.0912010260404629,0.713633717904619,0.595034519260876,0.729649942148922,0.622568175682802,0.901120443223487,0.884285894262881,0.629455264139991,0.888339982091153,0.665456627714865,0.683091967480047,0.912181849852983,0.724449330325714,0.682889513502324,0.287642148579032,0.543344822651864,0.0705682876337942,0.74692539957824,0.744969494581822,0.578192971263205,0.698925468916597,0.753198323947561,0.871262462737115,0.441597103152116,0.754097486557773,0.847521957495278,0.963519892980983,0.366620831472343,0.926124061649223,0.764124488385731,0.856379270772196,0.777756414720156,0.74237899210762,0.700710601278501,0.656803482627281,0.316203514561971,0.887347587655394,0.597423171320027,0.50025286695066,0.669920480775927,0.386475740938764,0.655693169573049,0.48854831624318,0.874877081490799,0.813064805544201,0.456405163242543,0.739763837887957,0.60686486631226,0.452122225237278,0.456023873947245,0.611943392397169,0.842905970634904,0.9057000383907,0.423761424368803,0.377025146453479,0.20367910734251,0.884254626445169,0.772234806209443,0.65940469126697,0.941548759304224,0.746651700518116,0.612555293249743,0.704354687271082,0.299651863059117,0.628300500538886,0.851800120895277,0.468222349779909,0.6477730727264,0.776167755208801,0.670222391888164,0.750077176751978,0.897566332464792,0.439164261483245,0.863584283051255,0.55637878048677,0.786333557223426,0.44977168412001,0.903276834610168,0.630554810028061,0.827813097342065,0.376433621453182,0.686238840745989,0.670145912562556,0.19186897664894,0.745346932913865,0.773610518650692,0.691425140896089,0.61690347235789,0.784987494159541,0.475310363119298,0.895661971328418,0.373257643917284,0.551081135523385,0.445258052592865,0.540628216184794,0.349870395232745,0.641608486865334,0.947435181209843,0.708835800426818,0.492632044523019,0.556341940393981,0.590783610023592,0.779890923143226,0.404742338636122,0.887381832875832,0.535933743133785,0.515187754015072,0.628331942145133,0.339641084573315,0.669710409917509,0.554121822886649,0.766149270006031,0.588731341923953,0.535922592376024,0.428603719065304,0.760192706487101,0.336396594618413,0.476710214572363,0.777613515057039,0.776281199423085,0.283063773265518,0.575947448023416,0.420804529636452,0.563680069728327,0.653296676991673,0.263473821840734,0.651174442472336,0.276472639293841,0.482901252705918,0.758973607231634,0.655032755426755,0.712319137222152,0.296319740738755,0.76242571154281,0.51274363064116,0.523613284709196,0.558721734591494,0.494921308968984,0.263377076824674,0.53220578433868,0.63798528137939,0.643438335507905,0.654379190156447,0.519524536418534,0.370230737374712,0.456624172833487,0.766766249865627,0.792981031439797,0.631213802245324,0.35626430607155,0.70212440729861,0.38734260952015,0.632972156174918,0.476347113416099,0.286315608815907,0.869571387429499,0.305171411751232,0.815705248789383,0.898108460295727,0.382681207336178,0.285557374835834,0.461599031650799,0.371039551681698,0.592786071440335,0.508777276630306,0.778804807019198,0.795132227917854,0.73980445914946,0.545450318432849,0.783490804610269,0.439410390251669,0.172812715254915,0.258982859525098,0.900529779719048,0.279459114513523,0.826900581149223,0.609724971342777,0.250356014703302,0.691170067744104,0.762951640479106,0.782476424145155,0.860442219589359,0.479743092777272,0.695538093274212,0.489150426842859,0.660560173451586,0.791619402506204,0.69531841531846,0.275626483248249,0.391344702673063,0.765510305284086,0.568959751528789,0.233419423818561,0.548246724690651,0.427473451722074,0.666042070953692,0.526707479354914,0.475031920229918,0.67365862304023,0.481602398098689,0.478651079312528,0.37004822934154,0.71396922348674,0.79119804865836,0.638950346459961,0.777988372092716,0.811958039296677,0.626237936316542,0.9135663149316,0.596793281572974,0.682585373049756,0.715420740592455,0.475266179675434,0.175987681965211,0.309933251732246,0.728651645743898,0.492563992916141,0.925868679155671,0.570952115611106,0.892963602844276,0.498399602814528,0.344589566882839,0.734145258665529,0.428265613310909,0.794177538403984,0.264638636546632,0.759528692213995,0.515153319738265,0.574707737622489,0.844304080127218,0.867503700490508,0.718312163798745,0.868837678856051,0.673547771290807,0.561413279911187,0.809517617488859,0.679487164811177,0.367465495744949,0.889157686131546,0.590969639276869,0.855806745361897,0.74960169684914,0.566137451598563,0.629289473672518,0.82296502589421,0.444025616222496,0.893228847183184,0.578237126887671,0.858719338001682,0.516517192982962,0.322666756515246,0.831952684996724,0.564583853565967,0.621715107632138,0.900134514246167,0.912575466084694,0.653405459977661,0.202922149622778,0.948960699149993,0.557672731722906,0.655755018653473,0.605186973543271,0.351368268865543,0.691945273093885,0.441727772678439,0.201805828792342,0.497977115695962,0.408023980178952,0.648532513126921,0.731899570652235,0.766700882459297,0.241813334355123,0.785518781383375,0.819940212464113,0.766713239117138,0.589108684751689,0.409164211656269,0.881017835035663,0.443505914892338,0.557143108866795,0.908806913439657,0.910660304279621,0.172653453073325,0.244445304230012,0.320183713791503,0.498481993009884,0.511313807971764,0.675512237824972,0.939914646171637,0.370276846033503,0.491540101040586,0.647904304338964,0.453340624040426,0.458650493102398,0.794447504489948,0.455259945425228,0.971521772555982,0.737329017639091,0.820503987837352,0.66714482257988,0.800011771717087,0.641714715842683,0.873852356913085,0.758078363637572,0.133722825024236,0.528888258137937,0.2606425927171,0.596188539271139,0.464549581676367,0.891372058170557,0.310543852627243,0.60702792379965,0.400328951946514,0.243473547106047,0.750344723311343,0.793340052752406,0.930437775994928,0.206108575797399,0.596599636623558,0.419615506724672,0.473009350122427,0.434918798438559,0.898618929438446,0.653244076885284,0.898407839288342,0.424506187362636,0.674144402544962,0.477796714383297,0.333637014836888,0.803856199477744,0.433341830288845,0.302725865502461,0.414229017625992,0.848122887730045,0.442559241546679,0.608312569541944,0.797413329573922,0.600257614710757,0.569620248733346,0.785974826825991,0.414542566859121,0.354340051211286,0.453992800339281,0.242993191519392,0.25359382227301,0.559176097995402,0.736114019126578,0.402894545326417,0.427098812466165,0.290200912475621,0.507267559773328,0.2989705371216,0.737236883441185,0.652070267163883,0.34438952753422,0.903507751510072,0.55802425139249,0.596973147157713,0.73425721743992,0.635274899755359,0.499327486139147,0.623528998858863,0.403093558477667,0.2318481268522,0.987244098013095,0.660850813750493,0.467955364089767,0.550792824492287,0.254643166153358,0.795340958251462,0.192999071098616,0.856658365433041,0.736677360813211,0.474778095341183,0.67408208667257,0.130467057244072,0.164503133997558,0.511228609217946,0.480044217544099,0.267511627327088,0.463118413097913,0.430985857459168,0.852859253844103,0.405418744565357,0.55288637157875,0.467497932219831,0.572188664690135,0.520120973230889,0.487476716449899,0.724711743056866,0.968294440238854,0.490896113603886,0.13716384361138,0.490602617065628,0.709646220841614,0.358391921610618,0.525172099433893,0.517855850862282,0.846779962420837,0.580042945860058,0.794612636953749,0.826278236283489,0.31189969623315,0.59540043178923,0.189732088787755,0.555376065478578,0.860850943134181,0.940226931646274,0.432613760145868,0.609837687084076,0.41805806320726,0.556173445388765,0.16745405380635,0.653206559468489,0.754728580105318,0.82532793554542,0.901376737088146,0.718624523171228,0.252196343510511,0.908563655647729,0.569652436427451,0.644090280006822,0.948702092466146,0.458125909079154,0.589979374797137,0.905815417992727,0.711551789693115,0.69018896508247,0.813216860171077,0.504802636943341,0.805770112023395,0.782519792859246,0.605904061416229,0.457204201047388,0.412791656526408,0.74581888091019,0.610574957985803,0.559930759084608,0.751722130250757,0.766812222447608,0.568463633945722,0.595601952608329,0.87523020817127,0.485184010977576,0.581817367546569,0.886657804891934,0.692015578837784,0.0512464109772642,0.8159496837238,0.867932444420028,0.843035387333897,0.84861458206922,0.640259049476817,0.619033677655022,0.448316690539497,0.485442718563922,0.760562048441225,0.423739793651101,0.143219279686908,0.457020337527494,0.269996076463452,0.374078901894352,0.741666757077651,0.554462082483369,0.69750074824289,0.42364908118558,0.248632389864205,0.832837115011065,0.875095022536955,0.802493339250351,0.774730304647229,0.72148186806011,0.538690594344158,0.441273188043001,0.548895848706966,0.747093339460437,0.719794667470314,0.504044782999787,0.0887340611208436,0.328082213718745,0.7123375316179,0.676710883579826,0.912557357482668,0.700441706016124,0.486175886605855,0.460051698648039,0.895100090192586,0.424938886171536,0.140426406578408,0.830271180452544,0.516139337098457,0.167817273767752,0.455832192569249,0.45862379855959,0.796856797176166,0.629734983280543,0.58640451822801,0.116612343741224,0.30987821988953,0.516194968865458,0.336198665830351,0.631413959956501,0.505997088888797,0.688437441739531,0.348544230529323,0.726848311975775,0.595083628282095,0.754699933811818,0.784199413165602,0.488496531052971,0.495954967948153,0.816667692243066,0.275005049948798,0.511015210889725,0.279340267014006,0.719491316429644,0.778495250860496,0.596035269486253,0.806314408715237,0.620274223696501,0.601939057324963,0.554308724712951,0.573336856360164,0.403036151069747,0.367778530564058,0.773479495676995,0.801565299359053,0.60193636423755,0.234803633486282,0.701435629011837,0.698438509906531,0.340748948152448,0.170692777430541,0.395836930838759,0.808236881460829,0.757186079361775,0.883403444850057,0.425147244297546,0.361334548252149,0.456781507718244,0.604889842790004,0.542878175254941,0.958304820939048,0.302469755595797,0.550879287290719,0.423890563634781,0.577924563566681,0.707934098078578,0.808780432803869,0.564801727962593,0.416042256825034,0.671554224320971,0.79686805617329,0.826020198666691,0.476821350654727,0.504762238751135,0.622738505937602,0.714680238032039,0.657975220713086,0.53561678421566,0.223303068823608,0.145226546588636,0.529861819716365,0.616471049562123,0.86780000936595,0.589708685711477,0.456736439198184,0.870036538738728,0.64691930985828,0.811713289635617,0.357095261806409,0.58045566926691,0.468179374831791,0.598298930082821,0.806258740706634,0.840792837806163,0.449191346972466,0.864807658194106,0.79463483158334,0.94274878108185,0.380796739768842,0.63890465698213,0.872797245855625,0.805912805297736,0.809036751684987,0.912029470695228,0.849751686789557,0.775444488993549,0.321164179648663,0.21832589098063,0.322496588816229,0.387442460857177,0.708166117539437,0.648418572873322,0.308790772165111,0.693331564069818,0.657262326127304,0.595804592306706,0.624849047922129,0.581075077860992,0.438322806558497,0.549100542494402,0.829133981193186,0.198373430040332,0.739864602588859,0.899592525821114,0.913287128335968,0.613349265904656,0.54345403417992,0.706522210893261,0.797369866692444,0.653880808704693,0.91587388679469,0.329995822783067,0.573337923074619,0.793349900221194,0.593770061304198,0.722016528500919,0.487051527466669,0.736882460950616,0.946703734800715,0.839168458687285,0.37990562376705,0.665968747351285,0.534095247749498,0.32835415354471,0.759373912088718,0.812829585269491,0.574677012807117,0.205437344961259,0.847250831280035,0.472276484580754,0.782343242132612,0.638835255678458,0.58725075803776,0.424480647394541,0.58375783701457,0.799811704235178,0.487758190396802,0.506182661696921,0.24824741087748,0.475245550622765,0.527643881797618,0.732368081562329,0.457542440283769,0.486380155538835,0.774735054618038,0.952116102008909,0.383430062135984,0.639682587895958,0.523856763745947,0.680715957100044,0.798683375815096,0.630519066776467,0.351482423228664,0.85428010520902,0.914858441718309,0.539852383197434,0.516724180227838,0.943286855094267,0.42450613215263,0.848082032067613,0.502719577141662,0.726515030810659,0.740753008243569,0.332231920675078,0.667666144050599,0.738212714672602,0.37547941399341,0.828805150676589,0.686084368515226,0.487366241672927,0.357747347271212,0.17926312150515,0.229083028380591,0.606855285858253,0.672262588706736,0.418641742137414,0.449233687871974,0.45872638660597,0.62941023933684,0.795457850467641,0.79490829846562,0.149527065084175,0.54334751473276,0.284854981708007,0.577751759096497,0.527347784527767,0.379508377193262,0.41907621117606,0.743376959514834,0.904360777878687,0.455726903413731,0.326118864054334,0.316140671951591,0.701724338516008,0.602636685037528,0.676007617733766,0.259373036960411,0.561004950397605,0.101227743422097,0.759705451693915,0.808057586755886,0.446819442672511,0.518883467290303,0.0416337920040501,0.541611759653647,0.485683221210622,0.604248103711077,0.347376948828681,0.386779422617878,0.887814154075607,0.913245726832824,0.748890494069827,0.523437793147042,0.527467188623149,0.371547821478054,0.846168503587594,0.707244263934843,0.366139973987726,0.406429608157782,0.486529830920514,0.580398428222507,0.757590064138094,0.791040342719317,0.612635697720476,0.578109675276664,0.234890791810901,0.781700132798574,0.864558029601439,0.803463578080003,0.638267123794506,0.670094221350546,0.849228402576569,0.695432987956802,0.917273108269396,0.34426256203469,0.66533468008293,0.861319983687277,0.676750653803167,0.570344029457136,0.849163694898449,0.10329901415837,0.786037265556852,0.859999583533793,0.923072679247061,0.523146886614,0.853634256674662,0.633015428298526,0.228774667728522,0.74662795318431,0.370712091815876,0.44416209269656,0.737408219103706,0.530620861834903,0.538827340503015,0.725127714278179,0.862740026375352,0.635958680599377,0.386175312719697,0.938776982063377,0.381002909569068,0.564062898448627,0.627873599271638,0.520826229880945,0.672458043099783,0.785379162411859,0.627130797880261,0.98558414516779,0.64161017128596,0.59120488230308,0.481649252781926,0.642467350009894,0.883900112955318,0.522375518282671,0.852386005306868,0.779187465367982,0.878156102116418,0.621934383707147,0.413463000078821,0.715841266018158,0.202978473173334,0.356237268267394,0.537126703955778,0.607547062695024,0.761348053823965,0.718211087554794,0.680862645754117,0.789085039716027,0.683195125786723,0.574581349750991,0.887090820502091,0.337475508537652,0.614239577671211,0.700057454276716,0.60619288105026];

const aqiData = [68,73,133,91,81,110,60,61,77,78,74,46,22,36,60,83,67,100,88,176,163,79,87,98,92,92,87,68,71,51,51,58,73,106,68,58,116,129,88,96,124,144,147,95,85,102,64,54,67,84,51,49,42,28,35,32,36,31,36,23,46,44,18,25,17,38,90,89,40,31,26,48,76,66,53,42,48,52,51,67,82,57,29,47,34,45,60,73,52,43,42,39,39,33,49,83,64,21,34,22,34,57,89,102,136,170,88,54,56,42,55,69,71,71,121,89,110,93,99,89,37,28,66,62,37,37,31,36,39,46,37,75,61,40,34,33,42,40,41,32,33,49,44,67,99,45,46,61,64,57,43,44,34,50,55,39,63,36,44,47,36,37,49,47,31,51,54,58,84,73,55,43,28,32,28,53,69,62,68,89,86,77,86,85,78,48,50,55,50,40,39,65,101,159,155,117,91,74,52,58,46,45,44,43,43,44,38,41,46,42,41,48,86,75,85,134,172,200,104,76,60,61,62,104,49,57,62,75,51,81,115,68,77,82,95,112,110,115,139,73,65,53,54,50,45,57,75,82,66,58,125,157,136,150,75,79,63,59,64,95,110,80,48,63,55,96,72,86,60,55,69,68,88,78,52,51,30,44,68,52,49,46,38,49,88,102,131,119,101,93,82,83,75,67,70,73,80,70,65,77,84,61,67,41,33,51,70,83,84,72,73,63,56,47,67,71,39,64,64,62,60,94,85,79,72,51,45,68,55,37,57,84,95,64,85,78,44,44,50,33,40,52,53,53,52,69,90,47,43,69,48,68,101,105,115,166,162,78,44,52,54,49,72,57,70,88,105,153,99,70,48,63,62,78,82,53,48,54,64,53,57,47,60,63,68,48,38,29,48,53,72,73,77,68,48,49,32,33,57,58,42,68,53,130,82,75,56,44,36,30,30,43,48,75,82,62,79,60,39,34,49,60,60,89,85,109,116,98,94,92,98,70,70,59,30,39,55,54,47,68,59,68,88,67,60,73,80,68,42,58,87,70,92,109,120,175,129,67,64,54,62,52,50,53,54,68,59,64,93,70,58,54,50,45,77,74,73,74,85,70,59,48,62,53,72,85,54,49,47,59,42,43,53,42,38,55,110,147,110,57,68,63,68,100,59,59,42,51,85,97,109,87,33,40,52,53,52,65,75,64,62,60,120,117,49,44,42,39,44,56,45,40,53,74,36,47,58,50,52,83,103,80,51,58,48,38,39,34,32,28,30,40,49,108,89,111,63,67,50,54,48,50,43,57,45,35,35,52,95,118,160,202,86,40,87,96,113,192,89,30,39,39,103,113,107,100,84,72,77,82,75,37,33,37,25,32,48,90,90,118,155,78,197,122,57,47,119,128,131,50,53,53,59,58,58,63,67,64,48,53,60,61,66,61,45,44,49,79,65,91,102,129,164,201,179,94,70,38,48,52,40,38,50,61,54,48,35,44,62,52,46,39,42,52,50,59,33,42,48,42,65,70,50,48,69,72,85,53,37,51,38,33,43,90,166,100,101,72,43,47,53,107,107,105,114,95,105,113,103,80,68,50,38,39,45,45,58,64,82,80,87,80,85,102,97,69,92,98,110,112,102,94,100,46,44,55,94,108,113,128,119,57,65,87,83,72,37,59,64,88,107,111,123,125,115,205,124,109,90,83,103,88,50,52,53,53,59,58,68,52,40,75,62,82,85,77,75,69,117,53,43,48,32,43,59,75,55,58,68,60,42,78,65,80,106,108,109,105,116,118,80,90,77,84,43,42,47,59,87,105,84,83,105,106,89,54,55,59,77,84,73,100,102,57,69,78,82,88,85,101,78,95,92,85,49,58,93,102,88,84,63,72,95,117,89,65,93,83,65,54,55,55,45,60,100,102,78,88,85,80,67,60,51,79,97,98,84,47,106,173,139,80,54,44,79,99,113,59,55,80,201,147,68,84,148,47,52,100,130,77,75,64,75,70,54,57,62,90,156,159,90,87,52,54,85,49,39,48,52,50,59,45,110,40,52,69,50,57,73,54,68,62,59,57,44,43,44,47,46,50,52,60];


export {betaSynData, aqiData};