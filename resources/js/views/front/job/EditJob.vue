<template>
    <div class="mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]">
        <div class="w-full space-y-4 py-5 text-center">
            <h1 class="text-4xl font-bold capitalize text-primary-blue">
                {{ $t("edit") }} Job
            </h1>
        </div>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">{{ $t("edit") }} Job</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="saveJobOffer()"
                id="jobOfferform"
                enctype="multipart/form-data"
            >
                <div class="mt-4">
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div class="col-span-1">
                            <label class=" text-gray-700"
                                >{{ $t("title") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.title"
                                maxlength="50"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                            <span class="text-xs font-light text-gray-400"
                                >{{ jobOffer.title ? jobOffer.title.length : 0 }} of
                                50 Characters</span
                            >
                        </div>

                        <div class="col-span-1">
                            <label class=" text-gray-700"
                                >Reference
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.reference"
                                maxlength="10"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                            <span class="text-xs font-light text-gray-400"
                                >{{ jobOffer.reference ? jobOffer.reference.length : 0 }} of
                                10 Characters</span
                            >
                        </div>
                    </div>

                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("continent") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                v-if="jobOffer.continent"
                                required
                                @change="filteredZone"
                                v-model="jobOffer.continent.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="continent in continents"
                                    :key="continent.id"
                                    :value="continent.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        continent.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        continent.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        continent.name_es
                                    }}</span>
                                    <span v-else>{{ continent.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("zoned") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.zone"
                                @change="filteredCountry"
                                v-model="jobOffer.zone.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="zoneFiltered.length != 0"
                                    v-for="zone in zoneFiltered"
                                    :key="zone.id"
                                    :value="zone.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        zone.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        zone.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        zone.name_es
                                    }}</span>
                                    <span v-else>{{ zone.name_pt }}</span>
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("continent") }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("country") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.country"
                                @change="filteredCity"
                                v-model="jobOffer.country.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="countryFiltered.length != 0"
                                    v-for="country in countryFiltered"
                                    :key="country.id"
                                    :value="country.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        country.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        country.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        country.name_es
                                    }}</span>
                                    <span v-else>{{ country.name_pt }}</span>
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("zoned") }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("city") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.city"
                                v-model="jobOffer.city.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="cityfiltered.length != 0"
                                    v-for="city in cityfiltered"
                                    :key="city.id"
                                    :value="city.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        city.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        city.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        city.name_es
                                    }}</span>
                                    <span v-else>{{ city.name_pt }}</span>
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("country") }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div class="">
                            <label class=" text-gray-700"
                                >{{ $t("location") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.location"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class=" text-gray-700"
                                >{{ $t("start-date") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.start_date"
                                type="date"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("company-name") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.company_name"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("company-email") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.company_email"
                                type="email"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700">{{
                                $t("company-website")
                            }}</label>
                            <input
                                v-model="jobOffer.company_website"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700">{{
                                $t("company-logo")
                            }}</label>
                            <div class="flex items-center space-x-4 py-4">
                                <img
                                    v-if="jobOffer.company_logo"
                                    :src="
                                        typeof jobOffer.company_logo == 'string'
                                            ? jobOffer.company_logo
                                            : previewImage(
                                                  jobOffer.company_logo
                                              )
                                    "
                                    @load="
                                        typeof jobOffer.company_logo == 'string'
                                            ? ''
                                            : loadImage(jobOffer.company_logo)
                                    "
                                    class="h-16 w-16 rounded-full"
                                    :alt="jobOffer.title"
                                />
                                <input
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <span class="text-xs font-light text-gray-500"
                                    >(Format: png, jpg, jpeg, webp | max: 500*500)</span
                                >
                        </div>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("salary") }}  Min
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.min_price"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("salary") }} Max 
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="jobOffer.max_price"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("currency") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.currency"
                                v-model="jobOffer.currency.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="currency in currencies"
                                    :key="currency.id"
                                    :value="currency.id"
                                >
                                    {{ currency.symbol + " " + currency.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700" for="es"
                            >{{ $t("language") + ' ' + $tc("of", 2) + ' ' + $t("work") }}
                            <span
                                class="hidden text-xs font-light lg:inline-block"
                                >({{ $t("maintain-crtl") }})</span
                            >
                            <span class="text-red-500">*</span>
                        </label>
                        <select
                            required
                            multiple
                            v-model="clanguages"
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option
                                v-for="language in languages"
                                :key="language.id"
                                :value="language.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    language.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    language.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    language.name_es
                                }}</span>
                                <span v-else>{{ language.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("size-company") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.size_company"
                                v-model="jobOffer.size_company.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="sizeCompany in sizeCompanies"
                                    :key="sizeCompany.id"
                                    :value="sizeCompany.id"
                                >
                                    {{ sizeCompany.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("level-study") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.level_study"
                                v-model="jobOffer.level_study.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="levelStudy in levelStudies"
                                    :key="levelStudy.id"
                                    :value="levelStudy.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        levelStudy.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        levelStudy.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        levelStudy.name_es
                                    }}</span>
                                    <span v-else>{{ levelStudy.name_pt }}</span>
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700" for="es"
                            >{{ $t("activity-area") }}
                            <span
                                class="hidden text-xs font-light lg:inline-block"
                                >({{ $t("maintain-crtl") }})</span
                            >
                            <span class="text-red-500">*</span>
                        </label>
                        <select
                            required
                            multiple
                            v-model="cactivityAreas"
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option
                                v-for="activityArea in activityAreas"
                                :key="activityArea.id"
                                :value="activityArea.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    activityArea.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    activityArea.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    activityArea.name_es
                                }}</span>
                                <span v-else>{{ activityArea.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("work-dept") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.work_department"
                                v-model="jobOffer.work_department.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="workDepartment in workDepartments"
                                    :key="workDepartment.id"
                                    :value="workDepartment.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        workDepartment.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        workDepartment.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        workDepartment.name_es
                                    }}</span>
                                    <span v-else>{{
                                        workDepartment.name_pt
                                    }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("work-mode") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.work_mode"
                                v-model="jobOffer.work_mode.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="workMode in workModes"
                                    :key="workMode.id"
                                    :value="workMode.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        workMode.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        workMode.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        workMode.name_es
                                    }}</span>
                                    <span v-else>{{ workMode.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("offer-type") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.offer_type"
                                v-model="jobOffer.offer_type.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="offerType in offerTypes"
                                    :key="offerType.id"
                                    :value="offerType.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        offerType.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        offerType.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        offerType.name_es
                                    }}</span>
                                    <span v-else>{{ offerType.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div >
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("contract-type") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.contract_type"
                                v-model="jobOffer.contract_type.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="contractType in contractTypes"
                                    :key="contractType.id"
                                    :value="contractType.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        contractType.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        contractType.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        contractType.name_es
                                    }}</span>
                                    <span v-else>{{ contractType.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div class="sm:col-span-2 mt-4">
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("y-experience") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="jobOffer.year_experience"
                                v-model="jobOffer.year_experience.id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="yearExperience in yearExperiences"
                                    :key="yearExperience.id"
                                    :value="yearExperience.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        yearExperience.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        yearExperience.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        yearExperience.name_es
                                    }}</span>
                                    <span v-else>{{
                                        yearExperience.name_pt
                                    }}</span>
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700 mb-2" for="pt"
                            >{{ $t("description") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <RichText :key="keyComponent" v-model="jobOffer.description"/>
                    </div>
                </div>

                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        type="submit"
                        disabled
                        class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                      <Spin :size="'small'" />
                    </button>
                    
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useJobOffers from "@/services/jobOfferServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
import useSizeCompanies from "@/services/sizeCompanyServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";
import useOfferTypes from "@/services/offerTypeServices.js";
import useContractTypes from "@/services/contractTypeServices.js";
import useWorkDepartments from "@/services/workDepartmentServices.js";
import useWorkModes from "@/services/workModeServices.js";
import useYearExperiences from "@/services/yearExperienceServices.js";
import useLanguages from "@/services/languageServices.js";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useCities from "@/services/cityServices.js";
import { useRouter } from "vue-router";
import RichText from '@/components/RichText.vue';
const router = useRouter();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const file = ref(null);
const { updateJobOffer, getJobOffer, jobOffer, errors, loading } =
    useJobOffers();
const { currencies, getCurrencies } = useCurrencies();
const { languages, getLanguages } = useLanguages();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
const { levelStudies, getLevelStudies } = useLevelStudies();
const { offerTypes, getOfferTypes } = useOfferTypes();
const { contractTypes, getContractTypes } = useContractTypes();
const { workDepartments, getWorkDepartments } = useWorkDepartments();
const { workModes, getWorkModes } = useWorkModes();
const { yearExperiences, getYearExperiences } = useYearExperiences();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { cities, getCities } = useCities();
const clanguages = ref([]);
const cactivityAreas = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);
const keyComponent = ref(0);

const filteredCity = (reset = true) => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == jobOffer.value.country.id;
    });
    if(reset) {jobOffer.value.city.id = "";}
};

const filteredCountry = (reset = true) => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == jobOffer.value.zone.id;
    });
    if(reset){jobOffer.value.country.id = "";
    jobOffer.value.city.id = "";
    cityfiltered.value = [];}
};

const filteredZone = (reset = true) => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == jobOffer.value.continent.id;
    });
    if(reset) {jobOffer.value.zone.id = "";
    jobOffer.value.country.id = "";
    jobOffer.value.city.id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];}
};

onMounted(async () => {
    await getJobOffer(props.id);
    keyComponent.value++;
    
    for (const item of jobOffer.value.activity_areas) {
        cactivityAreas.value.push(item.id);
    }
    for (const item of jobOffer.value.languages) {
        clanguages.value.push(item.id);
    }

    await getContinents();
    await getZones();
    filteredZone(false);

    await getCountries();
    filteredCountry(false);

    await getCities();
    filteredCity(false);

    await getCurrencies();
    await getYearExperiences();
    await getWorkModes();
    await getWorkDepartments();
    await getLevelStudies();
    await getSizeCompanies();
    await getOfferTypes();
    await getContractTypes();
    await getActivityAreas();
    await getLanguages();

    jobOffer.value.company_logo = "";
});

const saveJobOffer = async () => {
    let formData = new FormData();
    formData.append("title", jobOffer.value.title);
    formData.append("description", jobOffer.value.description);
    formData.append("location", jobOffer.value.location);
    formData.append("reference", jobOffer.value.reference);
    formData.append("company_name", jobOffer.value.company_name);
    formData.append("company_email", jobOffer.value.company_email);
    formData.append("company_website", jobOffer.value.company_website);
    formData.append("company_logo", jobOffer.value.company_logo);
    formData.append("min_price", jobOffer.value.min_price);
    formData.append("max_price", jobOffer.value.max_price);
    formData.append("start_date", jobOffer.value.start_date);
    formData.append("user_id", jobOffer.value.user.id);
    formData.append("currency_id", jobOffer.value.currency.id);
    formData.append("year_experience_id", jobOffer.value.year_experience.id);
    formData.append("contract_type_id", jobOffer.value.contract_type.id);
    formData.append("work_department_id", jobOffer.value.work_department.id);
    formData.append("work_mode_id", jobOffer.value.work_mode.id);
    formData.append("size_company_id", jobOffer.value.size_company.id);
    formData.append("offer_type_id", jobOffer.value.offer_type.id);
    formData.append("level_study_id", jobOffer.value.level_study.id);
    formData.append("city_id", jobOffer.value.city.id);
    formData.append("zone_id", jobOffer.value.zone.id);
    formData.append("continent_id", jobOffer.value.continent.id);
    formData.append("country_id", jobOffer.value.country.id);
    formData.append("languages", clanguages.value);
    formData.append("activityAreas", cactivityAreas.value);
    formData.append("_method", "PUT");

    await updateJobOffer(formData, props.id);

    if (errors.value == "") {
        router.push({
            name: "jobs",
        });
    }
};

const handelFileObject = () => {
    jobOffer.value.company_logo = file.value.files[0];
};
function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}
</script>
