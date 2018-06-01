var num_max = 20;
var mondai = [];
var seitou = [];
var kaitou = [];

mondai[1] = "水中におけるイオン間の相互作用は、誘電率が低下すると増加する。";
seitou[1] = 'm';
kaitou[1] = "";

mondai[2] = "一般に、分子間相互作用は、共有結合に比べ結合力は強い。";
seitou[2] = 'b';
kaitou[2] = "分子間相互作用は、電子の安全な移動を伴わないため、共有結合を比べて結合力は弱い。";

mondai[3] = "静電引力[クーロン(Coulomb)力]は溶媒の誘電率に比例する。";
seitou[3] = 'b';
kaitou[3] = "クーロン力(F)は次の式で表されるので、誘電率(ε)に反比例する。";

mondai[4] = "クーロンポテンシャルエネルギーはイオン間距離の2乗に反比例する。";
seitou[4] = 'b';
kaitou[4] = "クーロンポテンシャルエネルギー(U)は次の式で表されるので、イオン間距離(r)に反比例する。";

mondai[5] = "薬物が受容体に結合する要因の1つとして静電相互作用がある。";
seitou[5] = 'm';
kaitou[5] = "";

mondai[6] = "ファンデルワールス力(van der Waals)力に基づく相互作用として、配向効果、誘起効果及び分散効果などが挙げられる。";
seitou[6] = 'm';
kaitou[6] = "";

mondai[7] = "ファンデルワールス力は水素結合に基づく分子間引力である。";
seitou[7] = 'b';
kaitou[7] = "ファンデルワールス力は双極子に基づく引力である。";

mondai[8] = "n-ペンタンが、異性体の2,2-ジメチルプロパンより融点が高いのはファンデルワールス力に起因する。";
seitou[8] = 'm';
kaitou[8] = "";

mondai[9] = "H<sub>2</sub>OがH<sub>2</sub>Sより沸点が高いのはファンデルワールス力に起因する。";
seitou[9] = 'b';
kaitou[9] = "水分子同士の水素結合に起因する。";

mondai[10] = "分子量が同じであれば、速さのあるアルカンよりも直鎖状のアルカンの方がファンデルワールス力は大きい。";
seitou[10] = 'm';
kaitou[10] = "";

mondai[11] = "二酸化炭素は永久双極子モーメントをもつ。";
seitou[11] = 'b';
kaitou[11] = "CO<sub>2</sub>は分子の形が直線構造をとるため、分子内で極性を打ち消しあい、永久双極子モーメントをもたない。";

mondai[12] = "溶媒分子と溶質分子間に双極子相互作用が働くと、溶質は溶解しにくくなる。";
seitou[12] = 'b';
kaitou[12] = "溶媒和による作用で溶解を促進する。";

mondai[13] = "1,2-ジクロロエテンのcis体はtrans体より双極子モーメントが大きい。";
seitou[13] = 'm';
kaitou[13] = "";

mondai[14] = "気相中のエタン分子間には疎水性相互作用がみられる。";
seitou[14] = 'b';
kaitou[14] = "疎水性相互作用は、水中でのみ働く相互作用である。";

mondai[15] = "無極性分子に働く分散力は、分子内電子雲の揺らぎにより生じる。";
seitou[15] = 'b';
kaitou[15] = "ブタ-1,3-ジエンは4つのp軌道をもつため、π結合の分子軌道は4つ形成される。";

mondai[16] = "極性分子、無極性分子共に永久双極子モーメントをもつ。";
seitou[16] = 'b';
kaitou[16] = "無極性分子は永久双極子モーメントを持たない。";

mondai[17] = "ファンデルワールス力のポテンシャルエネルギーは、分子間距離rに比例する。";
seitou[17] = 'b';
kaitou[17] = "結晶中ではr<sup>3</sup>に、気体液体ではr<sup>6</sup>に反比例する。";

mondai[18] = "ファンデルワールス力はコロイド粒子間にも作用している。";
seitou[18] = 'm';
kaitou[18] = "";

mondai[19] = "フェノールの沸点がトルエンより高いのはフェノールが分子間水素結合を形成しているためである。";
seitou[19] = 'm';
kaitou[19] = "";

mondai[20] = "水素結合は共有結合より結合力が強い。";
seitou[20] = 'b';
kaitou[20] = "共有結合は水素結合より強い結合である。";

mondai[20] = "水素結合はタンパク質の二次構造の形成に関与する。";
seitou[20] = 'm';
kaitou[20] = "";

mondai[20] = "酢酸が同程度の分子量をもつ1-プロピルアルコールより沸点が高いのは、水素結合による二量体を形成しているためである。";
seitou[20] = 'm';
kaitou[20] = "";

mondai[20] = "o-ニトロフェノールはp-ニトロフェノールより融点が高い。";
seitou[20] = 'b';
kaitou[20] = "o-ニトロフェノールは分子内水素結合を、p-ニトロフェノールは分子間水素結合をつくるので、後者の方が融点は高い。";

mondai[24] = "H<sub>2</sub>O 1mol あたりの体積が水よりも氷で大となるのは、H<sub>2</sub>O分子間の水素結合の度合いが違うためである。";
seitou[24] = 'm';
kaitou[24] = "";

mondai[25] = "電荷移動により会合した分子は、各々の分子自体にはない新しい光吸収体をもつ。";
seitou[25] = 'm';
kaitou[25] = "";

mondai[26] = "ベンゼン-ヨウ素錯体では、ベンゼンが電子受容体分子として働く。";
seitou[26] = 'b';
kaitou[26] = "ベンゼン-ヨウ素錯体では、ベンゼンは電子給与体分子として働く。";

mondai[27] = "電荷移動は電子を放出しやすい分子と電子を受け取りやすい分子との間で起こる。";
seitou[27] = 'm';
kaitou[27] = "";

mondai[28] = "電荷移動とは、陰イオンが陽イオンに電子を移動させる相互作用という。";
seitou[28] = 'b';
kaitou[28] = "電荷のないもの同士が電子の授受を行う分子間相互作用である。";

mondai[29] = "界面活性剤の水中における見せる形成は、疎水性相互作用に基づく。";
seitou[29] = 'm';
kaitou[29] = "";

mondai[30] = "疎水性相互作用にはエントロピーは寄与しない。";
seitou[30] = 'b';
kaitou[30] = "疎水性相互作用は溶質分子周辺の水の構造の形成・破壊に基づくため、エントロピーも関係する。";

mondai[31] = "疎水性相互作用は、タンパク質の高次構造の安定化に寄与している。";
seitou[31] = 'm';
kaitou[31] = "";

mondai[32] = "ナフタレンが気相中で昇華性を示すのは、疎水性相互作用のためである。";
seitou[32] = 'b';
kaitou[32] = "ナフタレン分子は気相中ではファンデルワールス力で結合しており、kの結合力が弱いために昇華性を示す。";

mondai[33] = "疎水性相互作用は、溶質を取り巻く水分子同士の三次元構造の変化に関係する。";
seitou[33] = 'm';
kaitou[33] = "";
