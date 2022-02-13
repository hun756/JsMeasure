#include <chrono>

#include <cheerp/client.h>
#include <cheerp/clientlib.h>
#include <cheerp/jsobject.h>
#include <cmath>
#include <ratio>

class [[cheerp::jsexport]] [[cheerp::genericjs]] Timer
{
public:
    /**
     * @brief 
     *  Construct a new Timer object
     * 
     */
    Timer() noexcept{};

    /**
     * @brief
     *  This method equates the defined start time point to the current time. 
     *  In other words, it starts the timer.
     * 
     */
    void start()
    {
        startTime = std::chrono::high_resolution_clock::now();
        isRunning = true;
    }

    /**
     * @brief 
     *  When this method is called it sets the end time point to the current time
     *  and the isRunning method of the timer equals false. 
     * 
     */
    void stop()
    {
        stopTime = std::chrono::high_resolution_clock::now();
        isRunning = false;
    }

    /**
     * @brief 
     *  Get the Elapsed Time As Miliseconds
     * 
     * @return double 
     */
    double getElapsedTimeAsMs()
    {
        return this->getElapsedTime<std::chrono::milliseconds>();
    }

    /**
     * @brief 
     *  Get the Elapsed Time As Nanoseconds
     * 
     * @return double 
     */
    double getElapsedTimeAsNs()
    {
        return this->getElapsedTime<std::chrono::nanoseconds>();
    }

    /**
     * @brief 
     *  Get the Elapsed Time As second.
     * 
     * @return double 
     */
    double getElapsedTimeAsSec()
    {
        return this->getElapsedTime<std::chrono::seconds>();
    }

    /**
     * @brief 
     *  Get the Elapsed Time As Microseconds.
     * 
     * @return double 
     */
    double getElapsedTimeAsMicSec()
    {
        return this->getElapsedTime<std::chrono::microseconds>();
    }

private:
    /**
     * @brief 
     *  Get the Elapsed Time template helper function
     * 
     * @tparam duration_t
     * @return double 
     */
    template <typename duration_t>
    double getElapsedTime()
    {
        if (isRunning)
            this->stop();

        return std::chrono::duration_cast<duration_t>(stopTime - startTime).count();
    }

private:
    std::chrono::time_point<std::chrono::high_resolution_clock> startTime;
    std::chrono::time_point<std::chrono::high_resolution_clock> stopTime;

    bool isRunning{ false };
};

/**
 * @brief
 *  This method is used to measure the execution time of a transaction.
 *  See the readme file for more detailed information.
 * 
 * @param property 
 *  The name to be given to the algorithm to be measured.
 * 
 * @param callb 
 *  The callback function to which the algorithm will be applied. 
 * 
 * @return client::Object* 
 *  The result is a javascript object that returns the measurement 
 *  name and the elapsed time.
 *  Ex : OBJ {"XAlgorithmSpeed", 500}
 *  Ex : OBJ {"XAlgorithmSpeed", Obj <- Callback}
 */
[[cheerp::jsexport]] auto measure(client::String* property, client::EventListener* callb)
    -> client::Object *
{
    auto obj = new client::Object();
    obj->set_(property, callb);

    return obj;
}

void webMain() {}