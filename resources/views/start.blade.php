<html ng-app="reticentDemoApp">
<head>
    <script src='//maps.googleapis.com/maps/api/js?sensor=false'></script>
    <script type="application/javascript" src="<% elixir('js/all.js') %>"></script>
    <link rel="stylesheet" href="<% elixir('css/all.css') %>"/>
</head>
<body>
    <div ng-view class="container"></div>
</body>
</html>
