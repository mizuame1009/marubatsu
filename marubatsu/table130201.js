var num_max = 100;
var mondai = [];
var seitou = [];
var kaitou = [];

mondai[1] = "全身麻酔薬は、患者の資格を消失させ、外科手術が可能な状態にする薬物をいう。";
seitou[1] = 'm';
kaitou[1] = "";

mondai[2] = "局所麻酔薬を全身に投与すれば、全身麻酔薬として使用できる。";
seitou[2] = 'b';
kaitou[2] = "使用できない。局所麻酔薬を全身投与すると、心抑制や呼吸抑制などの重篤なショック症状をおこすことがある。";

mondai[3] = "全身麻酔薬に求められる作用は、睡眠・意識の消失、記憶消失、痛みの消失、筋弛緩状態などである。";
seitou[3] = 'm';
kaitou[3] = "";

mondai[4] = "全身麻酔薬は、適用方法により吸入麻酔薬と静脈麻酔薬に分けられる。";
seitou[4] = 'm';
kaitou[4] = "";

mondai[5] = "手術に最適な麻酔深度は、第II期(発揚期)である。";
seitou[5] = 'b';
kaitou[5] = "外科手術期は第III期である。";

mondai[6] = "ハロタンは、カテコールアミンに対する心筋の感受性亢進作用があり、心室性不整脈をおこしやすい。";
seitou[6] = 'm';
kaitou[6] = "";

mondai[7] = "プロポフォールは、麻酔の導入及び覚せいが速やかで、短時間型静脈麻酔薬として用いられる。";
seitou[7] = 'm';
kaitou[7] = "";

mondai[8] = "バルビツール酸系睡眠薬は、γ-アミノ酪酸GABA<sub>A</sub>受容体-Cl<sup>-</sup>チャネル複合体上のバルビツール酸結合部に結合しCl<sup>-</sup>チャネルを開口する。";
seitou[8] = 'm';
kaitou[8] = "";

mondai[9] = "バルビツール酸系睡眠薬は、レム睡眠を抑制する。";
seitou[9] = 'm';
kaitou[9] = "";

mondai[10] = "ベンゾジアゼピン系催眠薬は、治療量においてREM睡眠を強く抑制する。";
seitou[10] = 'b';
kaitou[10] = "治療量では、REM睡眠を抑制しない。";

mondai[11] = "ベンゾジアゼピン系催眠薬は、γ-アミノ酪酸GABA<sub>A</sub>受容体-Cl<sup>-</sup>チャネル複合体上のベンゾジアゼピン結合部に作動薬(アゴニスト)として作用する。";
seitou[11] = 'm';
kaitou[11] = "";

mondai[12] = "催眠薬であるゾピクロンは、構造も作用機序もベンゾジアゼピン系とは異なる。";
seitou[12] = 'b';
kaitou[12] = "構造はベンゾジアゼピン系とは異なるが、作用部位は同じGABA<sub>A</sub>受容体-Cl<sup>-</sup>チャネル複合体ベンゾジアゼピン結合部であり、Cl<sup>-</sup>チャネルの開口を介して催眠作用を現す。";

mondai[13] = "モルヒネに代表される中枢性鎮痛薬は、すべて麻酔性鎮痛薬である。";
seitou[13] = 'b';
kaitou[13] = "ペンタゾシンやブプレノルフィンのような非麻薬性鎮痛薬もある。";

mondai[14] = "モルヒネの鎮痛作用には、下行性抑制系神経への賦活作用が関与している。";
seitou[14] = 'm';
kaitou[14] = "";

mondai[15] = "モルヒネは、オピオイド受容体に対する拮抗薬(アンタゴニスト)として作用する。";
seitou[15] = 'b';
kaitou[15] = "オピオイド受容体に対する<b>作動薬(アゴニスト)</b>として作用する。";

mondai[16] = "モルヒネには鎮痛作用以外に、呼吸抑制作用、鎮咳作用、催吐作用、縮瞳作用などがある。";
seitou[16] = 'm';
kaitou[16] = "";

mondai[17] = "モルヒネによる縮瞳作用は、動眼神経核を興奮させるためにおこり、抗コリン薬を点眼しても抑制されない。";
seitou[17] = 'b';
kaitou[17] = "モルヒネの縮瞳作用はコリン作動性神経の興奮によるものなので、抗コリン薬の点眼によって抑制される。";

mondai[18] = "モルヒネの投与により高頻度に現れる副作用として、便秘、悪心・嘔吐、眠気がある。";
seitou[18] = 'm';
kaitou[18] = "";

mondai[19] = "モルヒネの呼吸抑制は、麻薬拮抗薬であるナロキソンの投与によって抑制できる。";
seitou[19] = 'm';
kaitou[19] = "";

mondai[20] = "てんかん重積状態における痙れんに対しては、ジアゼパムの静脈投与が用いられる。";
seitou[20] = 'm';
kaitou[20] = "";

mondai[21] = "抗てんかん薬の主な作用機序は、GABA作動性神経系昨日の増強及びNa<sup>+</sup>チャネルやCa<sup>2+</sup>チャネルの遮断である。";
seitou[21] = 'm';
kaitou[21] = "";

mondai[22] = "バルプロ酸は、GABAトランスアミナーゼを活性化することにより、抗てんかん作用を示す。";
seitou[22] = 'b';
kaitou[22] = "バルプロ酸は、GABAトランスアミナーゼ阻害作用により、中枢内GABA濃度を高め、抗てんかん作用を示す。";

mondai[23] = "パーキンソン病は、黒質から線条体へ至るドパミン作動性神経機能が亢進するためにおこる疾患である。";
seitou[23] = 'b';
kaitou[23] = "ドパミン作動性神経が障害され、その機能が低下することで発病し、相対的にコリン作動性神経が優位になる。";

mondai[24] = "";
seitou[24] = '';
kaitou[24] = "";

mondai[25] = "";
seitou[25] = '';
kaitou[25] = "";

mondai[26] = "";
seitou[26] = '';
kaitou[26] = "";

mondai[27] = "";
seitou[27] = '';
kaitou[27] = "";

mondai[28] = "";
seitou[28] = '';
kaitou[28] = "";

mondai[29] = "";
seitou[29] = '';
kaitou[29] = "";

mondai[30] = "";
seitou[30] = '';
kaitou[30] = "";

mondai[31] = "";
seitou[31] = '';
kaitou[31] = "";

mondai[32] = "";
seitou[32] = '';
kaitou[32] = "";

mondai[33] = "";
seitou[33] = '';
kaitou[33] = "";

mondai[34] = "";
seitou[34] = '';
kaitou[34] = "";

mondai[35] = "";
seitou[35] = '';
kaitou[35] = "";

mondai[36] = "";
seitou[36] = '';
kaitou[36] = "";

mondai[37] = "";
seitou[37] = '';
kaitou[37] = "";

mondai[38] = "";
seitou[38] = '';
kaitou[38] = "";

mondai[39] = "";
seitou[39] = '';
kaitou[39] = "";

mondai[40] = "";
seitou[40] = '';
kaitou[40] = "";

mondai[41] = "";
seitou[41] = '';
kaitou[41] = "";

mondai[42] = "";
seitou[42] = '';
kaitou[42] = "";

mondai[43] = "";
seitou[43] = '';
kaitou[43] = "";

mondai[44] = "";
seitou[44] = '';
kaitou[44] = "";

mondai[45] = "";
seitou[45] = '';
kaitou[45] = "";

mondai[46] = "";
seitou[46] = '';
kaitou[46] = "";

mondai[47] = "";
seitou[47] = '';
kaitou[47] = "";

mondai[48] = "";
seitou[48] = '';
kaitou[48] = "";

mondai[49] = "";
seitou[49] = '';
kaitou[49] = "";

mondai[50] = "";
seitou[50] = '';
kaitou[50] = "";

mondai[51] = "";
seitou[51] = '';
kaitou[51] = "";

mondai[52] = "";
seitou[52] = '';
kaitou[52] = "";

mondai[53] = "";
seitou[53] = '';
kaitou[53] = "";

mondai[54] = "";
seitou[54] = '';
kaitou[54] = "";

mondai[55] = "";
seitou[55] = '';
kaitou[55] = "";

mondai[56] = "";
seitou[56] = '';
kaitou[56] = "";

mondai[57] = "";
seitou[57] = '';
kaitou[57] = "";

mondai[58] = "";
seitou[58] = '';
kaitou[58] = "";

mondai[59] = "";
seitou[59] = '';
kaitou[59] = "";

mondai[60] = "";
seitou[60] = '';
kaitou[60] = "";

mondai[61] = "";
seitou[61] = '';
kaitou[61] = "";

mondai[62] = "";
seitou[62] = '';
kaitou[62] = "";

mondai[63] = "";
seitou[63] = '';
kaitou[63] = "";

mondai[64] = "";
seitou[64] = '';
kaitou[64] = "";

mondai[65] = "";
seitou[65] = '';
kaitou[65] = "";

mondai[66] = "";
seitou[66] = '';
kaitou[66] = "";

mondai[67] = "";
seitou[67] = '';
kaitou[67] = "";

mondai[68] = "";
seitou[68] = '';
kaitou[68] = "";

mondai[69] = "";
seitou[69] = '';
kaitou[69] = "";

mondai[70] = "";
seitou[70] = '';
kaitou[70] = "";

mondai[71] = "";
seitou[71] = '';
kaitou[71] = "";

mondai[72] = "";
seitou[72] = '';
kaitou[72] = "";

mondai[73] = "";
seitou[73] = '';
kaitou[73] = "";

mondai[74] = "";
seitou[74] = '';
kaitou[74] = "";

mondai[75] = "";
seitou[75] = '';
kaitou[75] = "";

mondai[76] = "";
seitou[76] = '';
kaitou[76] = "";

mondai[77] = "";
seitou[77] = '';
kaitou[77] = "";

mondai[78] = "";
seitou[78] = '';
kaitou[78] = "";

mondai[79] = "";
seitou[79] = '';
kaitou[79] = "";

mondai[80] = "";
seitou[80] = '';
kaitou[80] = "";

mondai[81] = "";
seitou[81] = '';
kaitou[81] = "";

mondai[82] = "";
seitou[82] = '';
kaitou[82] = "";

mondai[83] = "";
seitou[83] = '';
kaitou[83] = "";

mondai[84] = "";
seitou[84] = '';
kaitou[84] = "";

mondai[85] = "";
seitou[85] = '';
kaitou[85] = "";

mondai[86] = "";
seitou[86] = '';
kaitou[86] = "";

mondai[87] = "";
seitou[87] = '';
kaitou[87] = "";

mondai[88] = "";
seitou[88] = '';
kaitou[88] = "";

mondai[89] = "";
seitou[89] = '';
kaitou[89] = "";

mondai[90] = "";
seitou[90] = '';
kaitou[90] = "";

mondai[91] = "";
seitou[91] = '';
kaitou[91] = "";

mondai[92] = "";
seitou[92] = '';
kaitou[92] = "";

mondai[93] = "";
seitou[93] = '';
kaitou[93] = "";

mondai[94] = "";
seitou[94] = '';
kaitou[94] = "";

mondai[95] = "";
seitou[95] = '';
kaitou[95] = "";

mondai[96] = "";
seitou[96] = '';
kaitou[96] = "";

mondai[97] = "";
seitou[97] = '';
kaitou[97] = "";

mondai[98] = "";
seitou[98] = '';
kaitou[98] = "";

mondai[99] = "";
seitou[99] = '';
kaitou[99] = "";

mondai[100] = "";
seitou[100] = '';
kaitou[100] = "";