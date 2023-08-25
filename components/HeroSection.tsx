import React from 'react'

export default function HeroSection() {
    return (
        <div className="search-section">
            <img
                className="desktop-only"
                src="/addons/shared_addons/themes/wed_reviews_main_site_v2/img/category_bg_153251.webp"
                alt="WedReviews - גני אירועים, אולמות אירועים"
                aria-hidden="false"
                data-acsb-hidden="false"
            />
            <img
                className="mobile-only"
                src="/addons/shared_addons/themes/wed_reviews_main_site_v2/img/category_bg_mobile_153251.webp"
                alt="WedReviews - גני אירועים, אולמות אירועים"
                aria-hidden="true"
                data-acsb-hidden="true"
            />
            <div className="search-form-popular-searches">
                <form
                    method="post"
                    action="/supplier/search"
                    id="search-form-main"
                    role="search"
                    data-acsb-form-uuid="ahb7aox8invp"
                    data-acsb-form-type="search"
                >
                    <div className="searchable-section">
                        <input
                            className="search-term-main search-bar"
                            name="search_term"
                            aria-label="search"
                            placeholder="חפשו ממליצים על..."
                            autoComplete="off"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="true"
                            aria-hidden="false"
                            data-acsb-hidden="false"
                            type="text"
                            data-acsb-validation-uuid="ap6beh2pc3u"
                            data-acsb-field-visible="true"
                            aria-invalid="false"
                            aria-required="false"
                            data-acsb-tooltip="search"
                        />
                        <button
                            className="acsb-hidden"
                            type="submit"
                            aria-hidden="true"
                            data-acsb-hidden="true"
                            data-acsb-force-hidden="true"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            tabIndex={-1}
                            data-acsb-now-navigable="false"
                        >
                            חיפוש
                        </button>
                        <div
                            className="search-button-main"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            tabIndex={0}
                            data-acsb-now-navigable="true"
                            role="button"
                            data-acsb-possible-button="true"
                            data-acsb-force-navigable="true"
                        >
                            FIND{" "}
                            <i
                                className="icon-search"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                                data-acsb-force-hidden="true"
                            >
                                <span
                                    className="acsb-sr-only"
                                    data-acsb-sr-only="true"
                                    data-acsb-force-visible="true"
                                    aria-hidden="false"
                                    data-acsb-hidden="false"
                                >
                                    {" "}
                                    חפשו ממליצים על...{" "}
                                </span>
                            </i>
                        </div>
                    </div>
                </form>
                <div className="popular-searches">
                    <span role="heading" data-acsb-fake-title="true" aria-level={5}>
                        חיפושים פופולריים:
                    </span>
                    <div className="links">
                        <a
                            href="153251/240731"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="true"
                        >
                            {" "}
                            גני אירועים במרכז,{" "}
                        </a>{" "}
                        <a
                            href="/provider/stories/260074"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="true"
                        >
                            {" "}
                            שירן שפלר,{" "}
                        </a>{" "}
                        <a
                            href={"153279"}
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="true"
                        >
                            {" "}
                            שמלות כלה,{" "}
                        </a>{" "}
                        <a
                            href="/provider/stories/258715"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="true"
                        >
                            {" "}
                            חיים אפריאט{" "}
                        </a>
                    </div>
                </div>
            </div>
            <div className="photo_credit">צילום: חיים אפריאט</div>
        </div>

    )
}
