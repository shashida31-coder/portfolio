"use strict";

const articleCategories = [
    {
        id: "camera",
        number: "01",
        title: "カメラモデル・射影幾何",
        englishTitle: "Camera Model & Projective Geometry",
        description:
            "カメラ、透視投影、同次座標、内部パラメータ、キャリブレーションなどの基礎を扱います。",
        articles: [
            {
                number: "01",
                title: "カメラとは何か",
                url: "https://zenn.dev/s_hashida/articles/89a158155beb7a"
            },
            {
                number: "02",
                title: "射影とは何か（透視投影の正体）",
                url: "https://zenn.dev/s_hashida/articles/647ba9aaff2858"
            },
            {
                number: "03",
                title: "同次座標とは何か",
                url: "https://zenn.dev/s_hashida/articles/255da52f882659"
            },
            {
                number: "04",
                title: "カメラ行列とは何か",
                url: "https://zenn.dev/s_hashida/articles/4bf1ae353a09f5"
            },
            {
                number: "05",
                title: "内部パラメータとは何か",
                url: "https://zenn.dev/s_hashida/articles/50125d8c0b6caa"
            },
            {
                number: "06",
                title: "カメラパラメータはどう求めるのか（キャリブレーション）",
                url: "https://zenn.dev/s_hashida/articles/d86cb2614f11a3"
            },
            {
                number: "07",
                title: "レンズ歪みとは何か",
                url: "https://zenn.dev/s_hashida/articles/470a6c5335befe"
            }
        ]
    },
    {
        id: "sfm",
        number: "02",
        title: "三角測量・SfM",
        englishTitle: "Triangulation & Structure from Motion",
        description:
            "対応点、エピポーラ幾何、カメラ姿勢、三次元復元、Bundle Adjustmentを扱います。",
        articles: [
            {
                number: "08",
                title: "三角測量とは何か",
                url: "https://zenn.dev/s_hashida/articles/bb940b717cae87"
            },
            {
                number: "09",
                title: "対応点は「線」の上にある（エピポーラ幾何）",
                url: "https://zenn.dev/s_hashida/articles/0a5c28cb20adee"
            },
            {
                number: "10",
                title: "エッセンシャル行列とカメラ姿勢の復元",
                url: "https://zenn.dev/s_hashida/articles/5d17d16488f55a"
            },
            {
                number: "11",
                title: "Structure from Motion（SfM）とは何か",
                url: "https://zenn.dev/s_hashida/articles/6121d5859766bd"
            },
            {
                number: "12",
                title: "Bundle Adjustmentとは何か",
                url: "https://zenn.dev/s_hashida/articles/362a652a8df531"
            }
        ]
    },
    {
        id: "optimization",
        number: "03",
        title: "非線形最適化",
        englishTitle: "Nonlinear Optimization",
        description:
            "Gauss-Newton法、LM法、最尤推定、重み付き最小二乗、ロバスト推定などを扱います。",
        articles: [
            {
                number: "13",
                title: "非線形最適化とは何か（Bundle Adjustmentの解き方）",
                url: "https://zenn.dev/s_hashida/articles/8cabb90223457a"
            },
            {
                number: "14",
                title: "Levenberg–Marquardt法とは何か",
                url: "https://zenn.dev/s_hashida/articles/bbd0b6f2e6d443"
            },
            {
                number: "15",
                title: "最尤推定とは何か（なぜ二乗誤差になるのか）",
                url: "https://zenn.dev/s_hashida/articles/8bff3bf5c18b36"
            },
            {
                number: "16",
                title: "重み付き最小二乗とは何か",
                url: "https://zenn.dev/s_hashida/articles/ff4cc119f150c3"
            },
            {
                number: "17",
                title: "ロバスト推定とは何か",
                url: "https://zenn.dev/s_hashida/articles/ef486a559d7b28"
            },
            {
                number: "18",
                title: "ヤコビアンの疎構造とは何か",
                url: "https://zenn.dev/s_hashida/articles/8f056caaae1bfc"
            },
            {
                number: "19",
                title: "Bundle Adjustmentは何を最適化しているのか",
                url: "https://zenn.dev/s_hashida/articles/b31ff24a779f06"
            }
        ]
    },
    {
        id: "slam",
        number: "04",
        title: "回転・Lie群・SLAM",
        englishTitle: "Rotation, Lie Groups & SLAM",
        description:
            "回転表現、SE(3)、Visual Odometry、SLAM、Factor Graph、IMUを扱います。",
        articles: [
            {
                number: "20",
                title: "回転行列とは何か",
                url: "https://zenn.dev/s_hashida/articles/bd24ac22e7505f"
            },
            {
                number: "21",
                title: "Rodriguesの回転公式とは何か",
                url: "https://zenn.dev/s_hashida/articles/95d2837ff0593d"
            },
            {
                number: "22",
                title: "四元数（Quaternion）とは何か",
                url: "https://zenn.dev/s_hashida/articles/f55b1e326313fa"
            },
            {
                number: "23",
                title: "Lie群／Lie代数とは何か",
                url: "https://zenn.dev/s_hashida/articles/a975478c5ad6a0"
            },
            {
                number: "24",
                title: "SE(3)とは何か",
                url: "https://zenn.dev/s_hashida/articles/d9e1013cfbe131"
            },
            {
                number: "25",
                title: "Visual Odometry（VO）とは何か",
                url: "https://zenn.dev/s_hashida/articles/317da2fd8dfb97"
            },
            {
                number: "26",
                title: "SLAMとは何か",
                url: "https://zenn.dev/s_hashida/articles/1921578932d0cb"
            },
            {
                number: "27",
                title: "Factor Graphとは何か",
                url: "https://zenn.dev/s_hashida/articles/775378b009f6fe"
            },
            {
                number: "28",
                title: "Gauss-Newton法はSLAMでどう使われるのか",
                url: "https://zenn.dev/s_hashida/articles/af82fff32e1eb0"
            },
            {
                number: "29",
                title: "Poseはどのように最適化されるのか",
                url: "https://zenn.dev/s_hashida/articles/9231c57b29e235"
            },
            {
                number: "30",
                title: "IMUとは何か",
                url: "https://zenn.dev/s_hashida/articles/97b26bff282399"
            },
            {
                number: "31",
                title: "IMU Preintegrationとは何か",
                url: "https://zenn.dev/s_hashida/articles/51b94699365862"
            }
        ]
    },
    {
        id: "satellite",
        number: "05",
        title: "写真測量・衛星測量",
        englishTitle: "Aerial & Satellite Photogrammetry",
        description:
            "空中三角測量、RPC、RFM、オルソ補正、True Ortho、オルソモザイクまでを扱います。",
        articles: [
            {
                number: "32",
                title: "空中三角測量とは何か",
                url: "https://zenn.dev/s_hashida/articles/527b27c67dd7bd"
            },
            {
                number: "33",
                title: "空中三角測量はどのように地図座標に合わせるのか",
                url: "https://zenn.dev/s_hashida/articles/e9b50a5c8b9bfd"
            },
            {
                number: "34",
                title: "RPC（Rational Polynomial Coefficient）とは何か",
                url: "https://zenn.dev/s_hashida/articles/b222730a0d3a49"
            },
            {
                number: "35",
                title: "衛星空中三角測量（Satellite Triangulation）とは何か",
                url: "https://zenn.dev/s_hashida/articles/67d8d8bd93c8ec"
            },
            {
                number: "36",
                title: "RPCの内部構造とRational Function Modelとは何か",
                url: "https://zenn.dev/s_hashida/articles/126c0c7e2c7df2"
            },
            {
                number: "37",
                title: "RPCはどのように作られるのか ～Rigorous ModelとRFM近似～",
                url: "https://zenn.dev/s_hashida/articles/03dd4e1d8ebaba"
            },
            {
                number: "38",
                title: "なぜRPC補正が必要なのか ～ Bias CorrectionとAffine補正 ～",
                url: "https://zenn.dev/s_hashida/articles/90fdebe3a83d2c"
            },
            {
                number: "39",
                title: "オルソ補正（Orthorectification）とは何か",
                url: "https://zenn.dev/s_hashida/articles/8d289cd38fa003"
            },
            {
                number: "40",
                title: "DEM・DSM・DTMとは何か ～標高データの違いを理解する～",
                url: "https://zenn.dev/s_hashida/articles/1e81210c77778d"
            },
            {
                number: "41",
                title: "オルソ画像はどのように作られるのか ～DEM・RPC・リサンプリングによる画像生成～",
                url: "https://zenn.dev/s_hashida/articles/b6d4f0215d1674"
            },
            {
                number: "42",
                title: "True Ortho（トゥルーオルソ）とは何か",
                url: "https://zenn.dev/s_hashida/articles/171c74777f12f3"
            },
            {
                number: "43",
                title: "オルソモザイク（Orthomosaic）とは何か",
                url: "https://zenn.dev/s_hashida/articles/02c623db6d28fc"
            },
            {
                number: "44",
                title: "シームライン（Seamline）とは何か",
                url: "https://zenn.dev/s_hashida/articles/e519433a6f5c93"
            }

        ]
    }
];

const categoryNav = document.getElementById("categoryNav");
const articleList = document.getElementById("articleList");

function createCategoryNavigation() {
    if (!categoryNav) {
        return;
    }

    const allButton = document.createElement("a");
    allButton.className = "category-nav-link";
    allButton.href = "#articleList";
    allButton.textContent = "All";

    categoryNav.appendChild(allButton);

    articleCategories.forEach((category) => {
        const link = document.createElement("a");

        link.className = "category-nav-link";
        link.href = `#${category.id}`;
        link.textContent = category.title;

        categoryNav.appendChild(link);
    });
}

function createArticleLink(article) {
    const link = document.createElement("a");

    link.className = "article-item";
    link.href = article.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const number = document.createElement("span");
    number.className = "article-number";
    number.textContent = article.number;

    const title = document.createElement("span");
    title.className = "article-title";
    title.textContent = article.title;

    const arrow = document.createElement("span");
    arrow.className = "article-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";

    link.append(number, title, arrow);

    return link;
}

function createCategorySection(category) {
    const section = document.createElement("section");

    section.className = "article-category";
    section.id = category.id;

    const heading = document.createElement("div");
    heading.className = "article-category-heading";

    const headingNumber = document.createElement("p");
    headingNumber.className = "article-category-number";
    headingNumber.textContent = category.number;

    const headingText = document.createElement("div");

    const englishTitle = document.createElement("p");
    englishTitle.className = "article-category-english";
    englishTitle.textContent = category.englishTitle;

    const title = document.createElement("h2");
    title.textContent = category.title;

    const description = document.createElement("p");
    description.className = "article-category-description";
    description.textContent = category.description;

    headingText.append(englishTitle, title, description);
    heading.append(headingNumber, headingText);

    const items = document.createElement("div");
    items.className = "article-items";

    category.articles.forEach((article) => {
        items.appendChild(createArticleLink(article));
    });

    section.append(heading, items);

    return section;
}

function renderArticles() {
    if (!articleList) {
        return;
    }

    articleList.innerHTML = "";

    articleCategories.forEach((category) => {
        articleList.appendChild(createCategorySection(category));
    });
}

createCategoryNavigation();
renderArticles();