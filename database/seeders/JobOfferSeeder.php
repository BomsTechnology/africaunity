<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobOfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job_offers')->insert([
            'title' => 'Dev frontend',
            'description' => 'Description de l\'offre',
            'status' => 1,
            'location' => 'Makepe',
            'company_name' => 'GNO BUSINESS',
            'company_email' => 'email@entreprise.com',
            'company_website' => 'www.entreprise.com',
            'company_logo' => null,
            'min_price' => '1000',
            'max_price' => '2000',
            'user_id' => 7, // Remplacez par l'ID de l'utilisateur associé
            'currency_id' => 1, // Remplacez par l'ID de la devise associée
            'year_experience_id' => 1, // Remplacez par l'ID de l'expérience requise associée
            'work_department_id' => 1, // Remplacez par l'ID du département de travail associé
            'work_mode_id' => 1, // Remplacez par l'ID du mode de travail associé
            'size_company_id' => 1, // Remplacez par l'ID de la taille de l'entreprise associée
            'offer_type_id' => 1, // Remplacez par l'ID du type d'offre associé
            'level_study_id' => 1, // Remplacez par l'ID du niveau d'études associé
            'city_id' => 1, // Remplacez par l'ID de la ville associée
            'zone_id' => 1, // Remplacez par l'ID de la zone associée
            'continent_id' => 1, // Remplacez par l'ID du continent associé
            'country_id' => 2, // Remplacez par l'ID du pays associé
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
