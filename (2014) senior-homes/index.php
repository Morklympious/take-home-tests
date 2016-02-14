 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

	<head>
		
		<!-- Meta properties: Author, content type, Keywords (for crawlers), website description -->
		<meta name="author" content="Bradley Stafford">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
		<meta name="keywords" content="Senior, Homes, Living, Search">
		<meta name="description" content="Seniorhomes.com is a searching solution for senior citizens looking for housing in one of many areas. Try it out for yourself!">
		
		
		<!-- Stylesheet -->
		<link rel="stylesheet" type="text/css" href="style.css">
		
		<!-- Custom font (hosted by Google) -->
		<link href='http://fonts.googleapis.com/css?family=Arimo' rel='stylesheet' type='text/css'>
		
		<!-- JQuery for more interactivity (hosted by Google) -->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" ></script>
		
		<!-- Scripts for page behavior (Tablesorter for sorting columns, body.js for UI behavior) -->
		<script type="text/javascript" src="./js/jquery.tablesorter/jquery.tablesorter.js"></script> 
		<script type="text/javascript" src="./js/body.js"></script>
		
		<!-- HTML5 elements will be inserted if this is an earlier version of IE that doesn't support HTML5 -->
		<!--[if lt IE 9]>
		<script type="text/javascript" src="./js/html5shiv.js"></script>
		<![endif]-->
		
		<!-- Title element, favicon -->
		<title>Senior Homes</title>
		<link rel="icon" type="image/png" href="./assets/icon.png">
		
	</head>
	
	<body>
		
		<!-- Logo, "Hello World" Section -->
		<header class="header">
		
			<img src="./assets/logo.png" alt="Senior Homes Logo" />
			<span> Hello World! </span>
			
		</header>
		<!-- End Logo, "Hello World Section" -->
		
		<!-- Primary Content, Table, Picture and text -->
		<section class="content">
			
			<section class="tabledata">
				
				<!-- Show/hide table button. The text in this element will be displayed if the browser
				Doesn't support scripts -->
				<a class="show" href="#"><noscript> (Oh no! Javascript is disabled!) </noscript> </a>
				<a id="searchanchor" href="#"></a><input id="search" placeholder="Search/filter results"> </input>
				
				<div class="tablecontainer">
				
					<!-- Table with Data -->
					<table id="leftTable">
						<thead>
							<tr>
								<th><a href="#">ID <span> click to sort </span> </a></th>
								<th><a href="#">Name <span> click to sort </span> </a></th>
								<th><a href="#">Date <span> click to sort </span> </a></th>
							</tr>
						</thead>
						<!-- 
							If this application submission wasn't time sensitive on my end, 
							this tbody (with some work) could be dynamically populated from 
							a file with PHP/Javascript 
						-->
						<tbody>
							<tr>
								<td>1</td>
								<td>Christina Patrick</td>
								<td>1/1/80</td>
							</tr>
							
							<tr>
								<td>2</td>
								<td>Sara Cook</td>
								<td>3/12/52</td>
							</tr>
							
							<tr>
								<td>3</td>
								<td>Ida Brewer</td>
								<td>2/24/63</td>
							</tr>
							
							<tr>
								<td>4</td>
								<td>Pablo Burgess</td>
								<td>5/5/95</td>
							</tr>
							
							<tr>
								<td>5</td>
								<td>Christie Schmidt</td>
								<td>12/1/37</td>
							</tr>
							
							<tr>
								<td>6</td>
								<td>Joe Simmons</td>
								<td>9/15/75</td>
							</tr>
							
							<tr>
								<td>7</td>
								<td>Toby Briggs</td>
								<td>4/25/64</td>
							</tr>
							
							<tr>
								<td>8</td>
								<td>Hilda Lawson</td>
								<td>3/21/95</td>
							</tr>
							
							<tr>
								<td>9</td>
								<td>Hector Cobb</td>
								<td>9/5/08</td>
							</tr>
							
							<tr>
								<td>10</td>
								<td>Walter West</td>
								<td>2/1/52</td>
							</tr>
							
							<tr>
								<td>11</td>
								<td>Stephanie May</td>
								<td>3/4/65</td>
							</tr>
							
							<tr>
								<td>12</td>
								<td>Michael Guerrero</td>
								<td>7/15/68</td>
							</tr>
							
							<tr>
								<td>13</td>
								<td>Carol Ferguson</td>
								<td>2/6/95</td>
							</tr>
							
							<tr>
								<td>14</td>
								<td>Carmen Hunter</td>
								<td>11/25/85</td>
							</tr>
							
							<tr>
								<td>15</td>
								<td>Travis Morton</td>
								<td>1/8/87</td>
							</tr>
							
							<tr>
								<td>16</td>
								<td>Casey Sanders</td>
								<td>2/9/65</td>
							</tr>
							
							<tr>
								<td>17</td>
								<td>Jerald Long</td>
								<td>7/5/34</td>
							</tr>
							
							<tr>
								<td>18</td>
								<td>Alexander French</td>
								<td>10/30/56</td>
							</tr>
							
							<tr>
								<td>19</td>
								<td>Irene Jordan</td>
								<td>5/5/55</td>
							</tr>
							
							<tr>
								<td>20</td>
								<td>Terry Barton</td>
								<td>4/6/82</td>
							</tr>
							
							<tr>
								<td>21</td>
								<td>Katrina Little</td>
								<td>7/9/12</td>
							</tr>
							
							<tr>
								<td>22</td>
								<td>Patty Berry</td>
								<td>5/29/54</td>
							</tr>
							
							<tr>
								<td>23</td>
								<td>Jackie Goodman</td>
								<td>9/23/12</td>
							</tr>
							
							<tr>
								<td>24</td>
								<td>Terrance Morgan</td>
								<td>1/30/52</td>
							</tr>
							
							<tr>
								<td>25</td>
								<td>Lynda Robbins</td>
								<td>2/15/89</td>
							</tr>
						</tbody>
					</table>
				</div>	
			</section>
			
			<!-- Right side of the content section, the image of the couple and the Lorem Ipsum -->
			<section class="pictureandtext">
				
				<figure id="coupleimage">
				<img src="./assets/couple.jpg" alt="A picture of a lovely couple" />
				</figure>
				
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis augue, congue et sapien ut, vehicula hendrerit magna. Nunc a mauris sit amet tortor cursus sodales ut eu leo. Praesent sit amet nunc enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Mauris pretium, metus sed consequat vehicula, metus nisi lacinia odio, non luctus sem magna at risus. 
				Donec sollicitudin fermentum egestas. In enim ipsum, facilisis at felis sit amet, rhoncus dapibus tortor. Aenean non adipiscing lorem. Donec malesuada nulla sit amet mauris dapibus, convallis tincidunt libero dapibus. 
				Nullam libero lorem, aliquet in consequat nec, elementum varius sapien. Maecenas tempus fermentum nibh in elementum. Aliquam congue vel est eu ultrices. Nunc id diam sit amet eros vehicula porta ac vitae eros. Fusce nec scelerisque felis. Duis rutrum semper augue, volutpat faucibus risus sollicitudin at. Cras sit amet sem ligula. Maecenas gravida in sem quis luctus. Vivamus viverra sagittis elit, id posuere libero venenatis a. Cras neque magna, pharetra ac sapien gravida, vulputate aliquet mauris. Proin at orci eu nibh interdum tincidunt.Donec lacinia ipsum eget odio cursus dictum. Aliquam nec est dolor. Etiam nec elit magna. Aliquam id viverra diam. Duis tristique, turpis id faucibus suscipit, nisi lectus volutpat dolor, in tristique turpis velit eu dolor. Donec vel elit euismod, gravida erat at, cursus ligula. Phasellus lobortis justo a metus luctus, et feugiat nisl accumsan. Suspendisse sagittis eu nisi eget imperdiet. Suspendisse commodo nec lorem sit amet eleifend. Donec velit libero, pulvinar lobortis tristique non, accumsan et sem. Nunc ac lorem quis dolor tempor vulputate. Aliquam aliquet rhoncus mi quis aliquet. Vivamus vestibulum ipsum et magna auctor volutpat. Donec tempus volutpat libero a porta.
				</p>
				
				<!-- Anchor tag that resets the window to the top -->
				<a class="backtotop" href="#"> Back to top </a>
				
			</section>

		</section>
		<!-- End Primary Content, Table, Picture, and text -->
		
		<!-- Footer that includes copyright information -->
		<footer class="footer">
			<?php date_default_timezone_set('America/Los_Angeles'); ?>
			<span>  &copy; <?php echo date('l\, \T\h\e jS \o\f M'); ?> 2013 Company, Inc. </span>
		</footer>
		<!-- End Footer -->
	
	</body>

</html>
