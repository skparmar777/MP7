import io.vertx.core.Vertx;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.http.HttpServer;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;

/**
 * A class that runs a small web server which calls your image transformation functions.
 * <p>
 * This server passes asynchronous POST calls made by the JavaScript running on the home page
 * through to the image transformation functions defined in <code>Transform.java</code>. You are
 * welcome to peruse this file, but you should not have to modify it. Note that the web server is
 * <i>not</i> used by the testing suite, which calls your image transformation functions directly.
 *
 * @see <a href="http://vertx.io/docs/vertx-web/java/">Vert.x-Web Documentation</a>
 */
public class WebServer {

    /**
     * The port that our server listens on.
     */
    private static final int DEFAULT_SERVER_PORT = 8125;

    /**
     * Wrap the image transform functions.
     * <p>
     * This function first deserializes the data sent by the web client, then calls the appropriate
     * transformation function, and then serializes the result.
     * <p>
     * Some of the transformation and bit operations performed by this function may be useful for
     * you to review as you write your own transformation functions.
     *
     * @param routingContext the Vert.x routing context for this request
     */
    private static void wrapConvertCurrency(final RoutingContext routingContext) {

    }
    
    private static void helloWorld(final RoutingContext routingContext) {
      // This handler will be called for every request
    	
  	  HttpServerResponse response = routingContext.response();
  	  response.putHeader("content-type", "text/plain");
  	  
  	  // Write to the response and end it
  	  response.end("hello");
    }
    
    /**
     * Start the transformation web server.
     * <p>
     * Note that the main method is not used during testing. So you are free to both understand and
     * modify this function.
     *
     * @param unused unused input arguments
     */
    public static void main(final String[] unused) {
    	Vertx vertx = Vertx.vertx();
    	
    	Router router = Router.router(vertx);
    	HttpServer server = vertx.createHttpServer();
    	
    	router.route().method(HttpMethod.GET).handler(StaticHandler.create());
    	
    	router.route().handler(WebServer::helloWorld);

    	server.requestHandler(router::accept).listen(8125);
       

        System.out.println("Starting my web server on localhost:" + DEFAULT_SERVER_PORT);
        System.out.println("If you get a message about a port in use, please shut\n"
                + "down other running instances of this web server.");        
    }
}
