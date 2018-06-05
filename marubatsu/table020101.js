var num_max = 25;
var mondai = [];
var seitou = [];
var kaitou = [];

mondai[1] = "pK<sub>a</sub>が大きほど酸性の強さは大きい。";
seitou[1] = 'b';
kaitou[1] = "pK<sub>a</sub>が小さいほど酸性の強さは大きい。";

mondai[2] = "25℃において、pK<sub>b</sub>が8の薬物の共役酸のpK<sub>a</sub>は6である。";
seitou[2] = 'm';
kaitou[2] = "25℃において、pK<sub>b</sub> + pK<sub>a</sub> = 14である";

mondai[3] = "水のイオン積は温度が一定でも酸や塩基が存在すると変化する。";
seitou[3] = 'b';
kaitou[3] = "酸や塩基が存在してもイオン積は一定である。25℃でpK<sub>w</sub>=14である。";

mondai[4] = "アレニウス(Arrhenius)の定義では、水に溶かしたときに水素イオンH<sup>+</sup>を生じる物質が酸である。";
seitou[4] = 'm';
kaitou[4] = "";

mondai[5] = "ルイス(Lewis)の定義では、酸は他の物質に水素イオンを与える物質である。";
seitou[5] = 'b';
kaitou[5] = "この定義はブレンステッドローリー(Brønnste)の定義である。";

mondai[6] = "同濃度の酢酸水溶液と酢酸ナトリウム水溶液の等量混合液のpHは、酢酸のpK<sub>a</sub>である。";
seitou[6] = 'm';
kaitou[6] = "";

mondai[7] = "pHは、pH=-log[H]<sup>+</sup>で表される。";
seitou[7] = 'm';
kaitou[7] = "";

mondai[8] = "pK<sub>a</sub>は、pK<sub>a</sub>=-logK<sub>a</sub>で表される。";
seitou[8] = 'm';
kaitou[8] = "";

mondai[9] = "pK<sub>a</sub>=5のとき、酸解離定数は10<sup>-5</sup>mol/Lとなる。";
seitou[9] = 'm';
kaitou[9] = "";

mondai[10] = "塩酸の場合、完全に解離するので、pH=-log[H<sup>+</sup>]=-log[HCl]となる。";
seitou[10] = 'm';
kaitou[10] = "";

mondai[11] = "希釈操作を行ったり、酸、塩基を多少加えても、溶液のpHがほとんど変化しない溶液を緩衝液という。";
seitou[11] = 'm';
kaitou[11] = "";

mondai[12] = "弱酸とその共役塩基の塩の混合溶液は緩衝能を示す。";
seitou[12] = 'm';
kaitou[12] = "弱塩基とその共役酸の塩も同様である。";

mondai[13] = "緩衝液のpHを求める式として、バンスライク(VanSlyke)の式がある。";
seitou[13] = 'b';
kaitou[13] = "バンスライクの式は緩衝能を求める式で、ヘンダーソン・ハッセルバルヒ(Henderson-Hasselbalch)がpHを求める式である。";

mondai[14] = "緩衝液は原子吸光光度法による金属イオンの測定によく利用される。";
seitou[14] = 'b';
kaitou[14] = "金属イオンの分析には強酸が使われる。緩衝液が用いられるのは酵素反応や液体クロマトグラフィーなどである。";

mondai[15] = "0.2mol/L酢酸50mLと0.2mol/L酢酸ナトリウム25mLの混合液のpHは4.5である。ただし、pK<sub>a</sub>=4.8、log2=0.3とする。";
seitou[15] = 'm';
kaitou[15] = "";

mondai[16] = "弱酸とその共役塩基の濃度比が1:2のときが最も緩衝能が強い。";
seitou[16] = 'b';
kaitou[16] = "緩衝能が最も強いのは濃度比1:1のときである。";

mondai[17] = "目的とする緩衝液のpHの1/2程度のpK<sub>a</sub>値をもつ酸、又は共役酸に対応する塩基を選択することが望ましい。";
seitou[17] = 'b';
kaitou[17] = "目的とするpHになるべく近いpK<sub>a</sub>をもつものを選ぶ。";

mondai[18] = "緩衝性が保てるpH範囲は、通常選択した弱酸などのpK<sub>a</sub>±1と考えてよい。";
seitou[18] = 'm';
kaitou[18] = "";

mondai[19] = "リン酸緩衝液は酸性、中世、塩基性で緩衝能をもつため幅広いpHで用いることができる。";
seitou[19] = 'm';
kaitou[19] = "立た氏、一部の酵素反応に使用できないことに注意する。";

mondai[20] = "緩衝液の濃度は、成分である酸の濃度で表示する。";
seitou[20] = 'b';
kaitou[20] = "酸とその共役塩基、又は塩基とその共役酸の総量として表示する。";

mondai[21] = "解離性官能基を有する化学物質は、溶液のpHにより分子形とイオン形の存在割合が大きく変化する。";
seitou[21] = 'm';
kaitou[21] = "";

mondai[22] = "酸性、塩基性化合物の分子形、イオン形の存在割合は、それらの体内吸収に影響を与えない。";
seitou[22] = 'b';
kaitou[22] = "吸収や溶解度などに大きく影響を与える。";

mondai[23] = "酸性の化合物はそのpK<sub>a</sub>以下のpH溶液では全てイオン形で存在する。";
seitou[23] = 'b';
kaitou[23] = "pK<sub>a</sub>=pHのとき分子形とイオン形が1：1であり、pHが下がるにつれて分子形分率が増加する。";

mondai[24] = "塩基性化合物は、その共役酸のpK<sub>a</sub>が小さいほど、水溶液中で分子形として存在しやすい。";
seitou[24] = 'm';
kaitou[24] = "";

mondai[25] = "25℃において、弱塩基性物質(pK<sub>b</sub>=9)を水に溶解し、イオン形と分子形の存在比が1:1となったとき、溶液のpHは5である。";
seitou[25] = 'm';
kaitou[25] = "";
