<?php
/**
 * Created by PhpStorm.
 * User: Jamie
 * Date: 8/23/2015
 * Time: 11:57 PM
 */

namespace App;

use GuzzleHttp\Client;

class BbyOpen
{
    const API_KEY = 'y68xpu7zybcr3h8z7wz7u4dx';

    /** @var Client  */
    protected $http_client;

    /** @var string */
    protected $base_uri = 'http://api.bestbuy.com/v1/';

    /**
     * @param Client $client
     */
    function __construct(Client $client = null) {
        if(is_null($client)) {
            $client = new Client([
                'base_uri' => $this->base_uri
            ]);
        }
        $this->client = $client;
    }

    function getProducts() {
        return json_decode($this->client->get('products(categoryPath.name=Smart Lighting&manufacturer=belkin)',[
            'query' => [
                'show' => 'manufacturer,sku,name,description,salePrice,productId,upc,shortDescription,thumbnailImage,image,longDescription,largeFrontImage',
                'pageSize' => '15',
                'page' => '1',
                'apiKey' => static::API_KEY,
                'format' => 'json',
            ],
        ])->getBody())->products;
    }

    function getStores($location,$radius) {
        try {
            $response = json_decode($this->client->get("stores(area($location,$radius))",[
                'query' => [
//                'show' => 'manufacturer,sku,name,description,salePrice,productId,upc,shortDescription,thumbnailImage,image,longDescription,largeFrontImage',
//                'pageSize' => '15',
//                'page' => '1',
                    'apiKey' => static::API_KEY,
                    'format' => 'json',
                ],
            ])->getBody())->stores;
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            var_dump($e->getRequest());
            var_dump($e->getResponse());
        }
        foreach($response as $r) {
            $r->coords = new \StdClass();
            $r->coords->latitude = $r->lat;
            $r->coords->longitude = $r->lng;
        }

        return $response;
    }
}