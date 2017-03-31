<?php
 
// Include Composer autoloader if not already done.
//include 'vendor/autoload.php';
include('class.pdf2text.php');
include_once 'parser.php';
include_once 'document.php';

class PdfParser implements Parser
{
    function __construct()
    {
		$this->parser = new PDF2Text();
    }

    public function parse($title, $authors, $article, $bibtex)
    {	
    	$filename = "tmp.pdf";
    	file_put_contents($filename, fopen($article, 'r'));
    	
    	//parse PDF and delete tmp file
    	$this->parser->setFilename('tmp.pdf');
		$this->parser->decodePDF(); 
 		$text = $this->parser->output();
 		unlink($filename);
		return new Document($title, $authors, $article, $bibtex, $text);
    }
}

?>