var num_max = 100;
var mondai = [];
var seitou = [];
var kaitou = [];

mondai[1] = "薬物の体内動態は、吸収、分布、代謝、排泄の諸過程から成り立っている。";
seitou[1] = 'm';
kaitou[1] = "";

mondai[2] = "吸収、分布、代謝、排泄の各過程の欧文頭文字をとり、ADMEと称する。";
seitou[2] = 'm';
kaitou[2] = "";

mondai[3] = "薬物の吸収とは、その薬物が吸収部位の細胞の中に取り込まれる移行過程をいう。";
seitou[3] = 'b';
kaitou[3] = "薬物の吸収部位から、体内つまり循環血液中への移行過程をいう。";

mondai[4] = "薬物の吸収機構には、受動拡散、能動輸送、膜動輸送などがある。";
seitou[4] = 'm';
kaitou[4] = "";

mondai[5] = "組織(臓器)へと分布できる薬物は、血漿中のタンパク質と結合している結合形薬物である。";
seitou[5] = 'b';
kaitou[5] = "血漿中のタンパク質と結合していない非結合形薬物だけが組織へと移行し、薬効を発現する。";

mondai[6] = "薬物は、血漿タンパク質と結合した結合形薬物として生体膜を通過する。";
seitou[6] = 'b';
kaitou[6] = "生体膜を通過できるのは非結合形(遊離型)薬物のみで、血漿タンパク質と結合した結合形薬物は通過できない。";

mondai[7] = "初回通過効果は、循環血液中への未変化体薬物の移行量に大きく影響する。";
seitou[7] = 'm';
kaitou[7] = "";

mondai[8] = "胆汁中に排泄された物質が再び小腸で吸収され肝臓に戻ることを、腸肝循環という。";
seitou[8] = 'm';
kaitou[8] = "";

mondai[9] = "内用剤とは、経口投与されたのち、消化管から吸収され全身に運ばれて作用する薬の剤形である。";
seitou[9] = 'b';
kaitou[9] = "内用剤には、制酸剤のように消化管内でのみ作用することを目的としたもの(吸収を必要としない)も含まれる。";

mondai[10] = "";
seitou[10] = '';
kaitou[10] = "";

mondai[11] = "";
seitou[11] = '';
kaitou[11] = "";

mondai[12] = "";
seitou[12] = '';
kaitou[12] = "";

mondai[13] = "";
seitou[13] = '';
kaitou[13] = "";

mondai[14] = "";
seitou[14] = '';
kaitou[14] = "";

mondai[15] = "";
seitou[15] = '';
kaitou[15] = "";

mondai[16] = "";
seitou[16] = '';
kaitou[16] = "";

mondai[17] = "";
seitou[17] = '';
kaitou[17] = "";

mondai[18] = "";
seitou[18] = '';
kaitou[18] = "";

mondai[19] = "";
seitou[19] = '';
kaitou[19] = "";

mondai[20] = "";
seitou[20] = '';
kaitou[20] = "";

mondai[21] = "";
seitou[21] = '';
kaitou[21] = "";

mondai[22] = "";
seitou[22] = '';
kaitou[22] = "";

mondai[23] = "";
seitou[23] = '';
kaitou[23] = "";

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